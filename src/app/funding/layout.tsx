import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Entrepreneur Academy - Funding",
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
    <div>
      <section className="flex justify-between flex-col sm:flex-row  items-center p-6 sm:p-10 bg-gradient-to-r from-[#64B500] to-[#B0DE77]">
        <div className="sm:flex-1 text-[#F4F4D4]">
          <h3 className="font-bold text-3xl sm:text-5xl">
            Secure the Funding You Need to Build Your Dream
          </h3>
          <p className="text-lg sm:text-xl mt-3 hidden sm:block">
            Access a curated directory of grants, loans and investment
            opportunities designed for entrepreneurs at every stage.
          </p>
        </div>
        <div className="sm:flex-1 flex justify-center items-center">
          <Image
            src="/funding.png"
            height={50}
            width={50}
            alt="funding image"
            className="sm:w-[50%] w-full"
          />
        </div>
      </section>
      <section>{children}</section>
    </div>
  );
}
