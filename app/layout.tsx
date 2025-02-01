import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { montserrat } from '@/app/fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Annual Anthem",
  description: "Find your Song of the Year!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body style={{ background: 'linear-gradient(to bottom, #434343 5vh, #333333 30vh, #0F0F0F 100vh)' }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
