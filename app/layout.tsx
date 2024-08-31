import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import Navbar from "@/components/common/Navbar"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      
      <body
      className={cn(
          "min-h-screen bg-background font-sans antialiased",
          outfit.variable
        )}
      >
        
        <Navbar/>
      
        <main className="flex-grow">
          {children}
        </main>
        
        <Toaster />
      </body>
    </html>
  );
}
