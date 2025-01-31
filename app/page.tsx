import Carousel from "@/components/Carousel";

export default async function Home() {
  const data = ["/general-logo.png", "/kpop-logo.png"]

  return (
    <main className="h-screen flex flex-col">
      <Carousel slides={data} />
      <button></button>
    </main>
  );
}