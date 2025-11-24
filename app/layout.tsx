import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vidhi & Sanjeev - Wedding Gratitude",
  description: "Thank you for surrounding our wedding with love. Relive the memories with us.",
  icons: {
    icon: '/vs-logo.png',
    shortcut: '/vs-logo.png',
    apple: '/vs-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${dancingScript.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
