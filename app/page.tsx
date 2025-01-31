"use client"
import Carousel from "@/components/Carousel";

export default function Home() {
  const data = ["./general-logo.png", "./kpop-logo.png"]

  return (
    <main style={{ overflow: 'hidden', height: '100vh' }}>
      <Carousel slides={data} />
    </main>
  );
}