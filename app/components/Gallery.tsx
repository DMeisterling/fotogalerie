import supabase from "../../utils/supabase";
import MyImage from "./MyImage";

async function getImages() {
  const { data } = await supabase.from("images").select("*").order("id");
  // console.log({ data });
  return { data };
}

export default (async function Gallery() {
  const { data } = await getImages();

  // console.log(data);
  return (
    <div className="mx-auto max-w-2xl py-24 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data?.map((resImage: any) => (
          <MyImage key={resImage.id} resImage={resImage} />
        ))}
      </div>
    </div>
  );
} as unknown as () => JSX.Element);
