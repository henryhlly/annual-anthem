"use client"

import Image from "next/image";
import { EmblaCarousel } from "./component/EmblaCarousel";

export default function Home() {
  return (
    <main style={{ overflow: 'hidden', height: '100vh' }}>
      <EmblaCarousel />
    </main>
  );
}