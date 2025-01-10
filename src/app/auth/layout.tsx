import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrepreneur Academy - Auth",
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
    <div
      className={`flex flex-col sm:flex-row  my-5 mx-4 sm:mx-20   sm:my-10 `}
    >
      <div className="sm:flex-1 flex flex-col justify-between items-center p-8 rounded-t-xl sm:rounded-t-none sm:p-20 bg-[#64b500] sm:rounded-l-3xl ">
        <div>
          <img
            src="/landing/hero.png"
            className="w-full h-auto mx-auto mt-10"
          />
        </div>
      </div>

      <div className="sm:flex-1 bg-white sm:rounded-r-3xl shadow rounded-b-xl sm:rounded-b-none">
        {children}
      </div>
    </div>
  );
}
