import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="bg-slate-300">
      <Navbar />
      <Gallery />
    </main>
  );
}
