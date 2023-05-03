import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Gallery />
    </main>
  );
}
