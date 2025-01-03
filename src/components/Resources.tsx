// import { resourceData } from "@/data/resourceData";
// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Resources = () => {
//   return (
//     <div className="bg-[#f6f6e8] p-10">
//       <h3 className="font-bold text-3xl mb-3">Resources</h3>

//       <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
//         {resourceData.map((item) => (
//           <article key={item.title}>
//             <img src={item.icon} className="w-20 h-auto" />
//             <h1 className="font-bold text-3l my-2">{item.title}</h1>
//             <p>{item.description}</p>

//             <button className="text-[#64B500] font-bold flex items-center gap-3 my-3">
//               {item.buttonText} <FaArrowRightLong />
//             </button>
//           </article>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Resources;

import { resourceData } from "@/data/resourceData";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Resources = () => {
  return (
    <div className="bg-[#f6f6e8] sm:p-10">
      <h3 className="font-bold text-3xl mb-3">Resources</h3>

      <div className="sm:grid  gap-10 overflow-hidden">
        <div className="flex sm:grid-cols-4 sm:grid gap-6 overflow-x-auto scrollbar-hidden px-4 -mx-4 snap-x snap-mandatory">
          {resourceData.map((item, index) => (
            <article
              key={index}
              className="flex-shrink-0 w-64 sm:w-auto bg-white rounded-lg p-4 shadow "
            >
              <img src={item.icon} className="w-20 h-auto" alt={item.title} />
              <h1 className="font-bold text-xl my-2">{item.title}</h1>
              <p>{item.description}</p>
              <button className="text-[#64B500] font-bold flex items-center gap-3 my-3">
                {item.buttonText} <FaArrowRightLong />
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;

