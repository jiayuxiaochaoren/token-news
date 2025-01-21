import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/app/globals.css";
import { Sidebar } from "@/app/components/sidebar";
import { LoadingProvider } from "@/contexts/loading-context";
import { Header } from "./components/header";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "FOMO Token Alerts",
  description: "Real-time token monitoring dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-[#171717] text-[#ffffff]`}
      >
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
