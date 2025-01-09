import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
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
      <body className="bg-gradient-to-b from-stone-600 from-0%">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
