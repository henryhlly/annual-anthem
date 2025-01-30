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
      {/* className="bg-gradient-to-b from-stone-700 from-0% text-white" */}
      {/* "min-h-screen bg-gradient-to-b from-gray-600 via-gray-900 to-black"  */}
      <body  
        className="min-h-screen bg-gradient-to-b from-[#6E6E6E] via-[#434343] to-[#0F0F0F]" 
        style={{ background: 'linear-gradient(to bottom, #434343 5%, #333333 30%, #0F0F0F 100%)' }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
