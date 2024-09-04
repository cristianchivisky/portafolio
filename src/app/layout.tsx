import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast'
import Navbar from '../components/Navbar';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react" 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cristian Chivisky",
  description: "Portfolio web - Cristian Chivisky",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col justify-between antialiased`}>
        <Navbar />
        <Toaster position="top-center" reverseOrder={false} />
        <Analytics />
        <main className="mb-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
