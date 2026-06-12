import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import JsonLd from "@/components/seo/JsonLd";
import { defaultMetadata, getGlobalJsonLd } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const lora = Lora({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${lora.variable} antialiased`}>
        <JsonLd data={getGlobalJsonLd()} />
        <Navbar />
        <div className="pb-16 md:pb-0">{children}</div>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
