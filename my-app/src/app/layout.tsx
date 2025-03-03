import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import { Inter } from 'next/font/google';
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={` ${inter.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
