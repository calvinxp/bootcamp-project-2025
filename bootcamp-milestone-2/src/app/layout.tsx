import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

// Geist is not a known Google font; replace with Inter (sans) and Roboto Mono (mono)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calvin's personal website",
  description: "A personal portfolio website for Calvin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
