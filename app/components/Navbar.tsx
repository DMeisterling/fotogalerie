import { v4 as uuidv4 } from "uuid";
import supabase from "../../utils/supabase";

// async function refreshImages() {
//   const { data } = await supabase.storage.from("images").list({ limit: 100 });
//   // console.log({ data });
//   return { data };
// }

export default (async function Navbar() {
  async function uploadImage(e: any) {
    let file = e.target.files[0];

    const { data, error } = await supabase.storage
      .from("images")
      .upload(uuidv4(), file);

    if (data) {
      //refreshImages();
    }
  }

  return (
    <div className="flex flex-col ontop items-center w-full h-auto px-3 pt-2 pb-2 fixed border-b-8 border-gray-600">
      <form>
        <input
          type="file"
          accept="image/png, image/jpeg"
          id="upload"
          className="hidden"
        />
        <label
          htmlFor="upload"
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          // onChange={(e) => uploadImage(e)}
        >
          Upload new photo
        </label>
      </form>
    </div>
  );
} as unknown as () => JSX.Element);
