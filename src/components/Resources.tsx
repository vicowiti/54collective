import { resourceData } from "@/data/resourceData";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Resources = () => {
  return (
    <div id="resources" className="bg-[#f6f6e8] sm:p-10">
      <h3 className="font-bold text-3xl mb-3">Resources</h3>

      <div className="sm:grid  gap-10 overflow-hidden">
        <div className="flex sm:grid-cols-4 sm:grid gap-6 overflow-x-auto scrollbar-hidden px-4 -mx-4 snap-x snap-mandatory">
          {resourceData.map((item, index) => (
            <article
              key={index}
              className="flex-shrink-0 w-64 sm:w-auto  rounded-lg p-4  "
            >
              <img src={item.icon} className="w-20 h-auto" alt={item.title} />
              <h1 className="font-bold text-xl my-2">{item.title}</h1>
              <p>{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                className="text-[#64B500] font-bold flex items-center gap-3 my-3"
              >
                {item.buttonText} <FaArrowRightLong />
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
