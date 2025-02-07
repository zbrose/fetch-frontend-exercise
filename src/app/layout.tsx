import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alley Cat's",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <h1>Alley Cat's Sibling Adoption Agency</h1>
        </header>
        {children}
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <h1>Footer Content...</h1>
        </footer>
      </body>
    </html>
  );
}
