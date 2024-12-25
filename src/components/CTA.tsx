// // import React from "react";

// // const CTA = () => {
// //   return (
// //     <div className="relative h-screen">
// //       {/* Top Black Background */}
// //       <div className="h-1/2 bg-[#f6f6e8]"></div>

// //       {/* Bottom White Background */}
// //       <div className="h-1/2 bg-[#2a2a27]"></div>

// //       {/* Center Section with Floating Image and Text */}
// //       <div className="absolute inset-0 flex items-center justify-center">
// //         {/* Floating Image */}
// //         <div className="relative">
// //           <img
// //             src="/landing/bg.png"
// //             alt="Floating"
// //             className="rounded-lg shadow-lg"
// //           />
// //           {/* Text Overlay */}
// //           <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold">
// //             <h2 className="text-2xl">
// //               Start your Entrepreneurial Journey Today
// //             </h2>
// //             <p className="text-lg">Sign Up Now for Free</p>

// //             <button className="p-3 border border-[#f4f4f4] mt-2 rounded-sm">
// //               Sign Up
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CTA;

// import React from "react";

// const CTA = () => {
//   return (
//     <div className="relative h-[50vh]">
//       {/* Top Black Background */}
//       <div className="h-1/2 bg-[#f6f6e8]"></div>

//       {/* Bottom White Background */}
//       <div className="h-1/2 bg-[#2a2a27]"></div>

//       {/* Center Section with Floating Image and Text */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         {/* Floating Image */}
//         <div className="relative max-w-5xl rounded-lg w-full">
//           <img
//             src="/landing/bg.png"
//             alt="Floating"
//             className="rounded-lg w-full h-auto object-cover"
//           />
//           {/* Text Overlay */}
//           <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center bg-black bg-opacity-50 text-white text-center">
//             <h2 className="text-2xl font-bold">
//               Start your Entrepreneurial Journey Today
//             </h2>
//             <p className="text-lg">Sign Up Now for Free</p>
//             <button className="p-3 border border-[#f4f4f4] mt-2 rounded-sm hover:bg-white hover:text-black transition">
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CTA;



import React from "react";

const CTA = () => {
  return (
    <div className="relative h-[50vh]">
      {/* Top Black Background */}
      <div className="h-1/2 bg-[#f6f6e8]"></div>

      {/* Bottom White Background */}
      <div className="h-1/2 bg-[#2a2a27]"></div>

      {/* Center Section with Floating Image and Text */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        {/* Floating Image */}
        <div className="relative w-full max-w-lg sm:max-w-2xl lg:max-w-5xl">
          <img
            src="/landing/bg.png"
            alt="Floating"
            className="rounded-lg w-full h-[200px]  sm:h-auto object-cover"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col gap-2 sm:gap-4 items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
            <h2 className="text-sm sm:text-2xl lg:text-3xl font-bold">
              🚀Start Your Entrepreneurial Journey Today
            </h2>
            <p className="text-sm sm:text-lg">
              Sign up now and take your first step!
            </p>
            <button className="sm:p-3 p-2 mt-2  border border-[#f4f4f4] rounded-sm hover:bg-white hover:text-black transition text-sm sm:text-base">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
