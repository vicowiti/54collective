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
            Empowering <span className="text-[#E5CF00]">Entrepreneurs</span> of
            Tomorrow, Today
          </h3>
          <p className="text-lg sm:text-xl mt-3 hidden sm:block">
            Discover the innovators shaping the future—meet the individuals who
            have taken the first step toward unlocking entrepreneurial success.
          </p>
        </div>
        <div className="sm:flex-1 flex justify-center items-center">
          <Image
            src="/admin.png"
            height={50}
            width={50}
            alt="admin image"
            className="sm:w-[50%] w-full"
          />
        </div>
      </section>
      <section>{children}</section>
    </div>
  );
}
