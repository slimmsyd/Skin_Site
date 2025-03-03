import type { Metadata } from "next";
import { Space_Grotesk, Inter } from 'next/font/google';
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
}) as { className: string };

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
}) as { className: string };

export const metadata: Metadata = {
  title: "SKIN Regenesis - Professional Waxing Services",
  description: "Expert waxing services in a comfortable, professional environment. Book your appointment today for silky smooth results.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.className} ${spaceGrotesk.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
