import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { NextAuthProvider } from "@/components/providers/next-auth-provider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XOXO",
  description: "Find Your Perfect Travel Partner & Create Unforgettable Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <NextAuthProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </NextAuthProvider>
      </body>
    </html>
  );
}
