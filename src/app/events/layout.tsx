import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Entrepreneur Academy - Events",
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
            Stay <span className="text-[#E5CF00]">Connected</span> to Africa’s
            Thriving Entrepreneurial Ecosystem.
          </h3>
          <p className="text-lg sm:text-xl mt-3">
            Discover events, workshops, and networking opportunities to expand
            your knowledge and connections.
          </p>
        </div>
        <div className="sm:flex-1 flex justify-center items-center">
          <Image
            src="/events.png"
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
