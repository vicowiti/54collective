
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";



const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100", // Thin
    "200", // Extra Light
    "300", // Light
    "400", // Regular
    "500", // Medium
    "600", // Semi Bold
    "700", // Bold
    "800", // Extra Bold
    "900", // Black
  ], // Customize the font weights you need
  style: ["normal", "italic"], // Optional: Include italic if needed
  variable: "--font-poppins", // Use CSS variable for custom usage
});

export const metadata: Metadata = {
  title: "Entrepreneur Academy",
  description: "By 54 Collective",
  icons: {
    icon: "/landing/logo.png",
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
        className={` ${poppins.variable} antialiased `}
      >
        <Toaster richColors position="top-center" duration={3}/>
        <Navbar />
        <div className="mainbody w-full  mx-auto">{children}</div>
        <Footer />
        <Toaster richColors/>
      </body>
    </html>
  );
}
