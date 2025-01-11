// "use client";

// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { FaFilter } from "react-icons/fa6";

// interface Props {
//   searchTerm: string;
//   setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
//   region: string;
//   setRegion: React.Dispatch<React.SetStateAction<string>>;
//   industry: string;
//   setIndustry: React.Dispatch<React.SetStateAction<string>>;
//   supportType: string;
//   setSupportType: React.Dispatch<React.SetStateAction<string>>;
//   setSearch: React.Dispatch<React.SetStateAction<boolean>>;
//   search: boolean;
//   reset: () => void;
//   filter: () => void;
// }

// const EsoSearch = (props: Props) => {
//   const [showFilter, setShowFilter] = useState(false);

//   return (
//     <div>
//       <div className="flex items-center justify-end gap-4">
//         <button
//           onClick={() => setShowFilter(!showFilter)}
//           className="flex sm:hidden shadow text-sm mb-3 items-center gap-2 bg-[#F4F4AC] text-[#88830C] px-4 py-2 rounded-lg"
//         >
//           <FaFilter />
//           Filter
//         </button>
//       </div>
//       <div
//         style={{ display: showFilter ? "block" : "none" }}
//         className="flex sm:flex-row flex-col sm:items-center gap-3"
//       >
//         <div className="sm:flex-1">
//           <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
//             <label
//               htmlFor="supportType"
//               className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
//             >
//               Support Type
//             </label>
//             <select
//               value={props.supportType || ""}
//               onChange={(e) => props.setSupportType(e.target.value)}
//               name="supportType"
//               id="supportType"
//               className="block w-full outline-none bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
//             >
//               <option value="">All</option>
//               <option value="Technical">Technical</option>
//               <option value="Financial">Financial</option>
//               <option value="Mentorship">Mentorship</option>
//             </select>
//           </div>
//         </div>
//         <div className="sm:flex-1">
//           <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
//             <label
//               htmlFor="region"
//               className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
//             >
//               Region
//             </label>
//             <select
//               value={props.region || ""}
//               onChange={(e) => props.setRegion(e.target.value)}
//               name="region"
//               id="region"
//               className="block w-full outline-none bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
//             >
//               <option value="">All</option>
//               <option value="East Africa">East Africa</option>
//               <option value="Africa">Africa</option>
//               <option value="Sub Saharan Africa">Sub Saharan Africa</option>
//             </select>
//           </div>
//         </div>
//         <div className="sm:flex-1">
//           <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
//             <label
//               htmlFor="industry"
//               className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
//             >
//               Industry
//             </label>
//             <select
//               value={props.industry || ""}
//               onChange={(e) => props.setIndustry(e.target.value)}
//               name="industry"
//               id="industry"
//               className="block w-full outline-none bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
//             >
//               <option value="">All</option>
//               <option value="Agriculture">Agriculture</option>
//               <option value="Fintech">Fintech</option>
//               <option value="Ed-Tech">Ed-Tech</option>
//               <option value="Health">Health</option>
//               <option value="Logistics">Logistics</option>
//               <option value="Manufacturing">Manufacturing</option>
//               <option value="Telecom">Telecom</option>
//               <option value="Transport">Transport</option>
//               <option value="Real Estate">Real Estate</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//         </div>
//         <div className="sm:flex-1">
//           <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
//             <label
//               htmlFor="name"
//               className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
//             >
//               Search Name
//             </label>
//             <input
//               value={props.searchTerm || ""}
//               onChange={(e) => props.setSearchTerm(e.target.value)}
//               type="search"
//               name="name"
//               id="name"
//               placeholder="Search by name"
//               className="block w-full outline-none bg-transparent pl-8 border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
//             />
//             <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
//           </div>
//         </div>
//         <div className="sm:flex-1 flex items-center gap-3">
//           <button
//             onClick={props.filter}
//             className="bg-[#80C22F] text-white px-4 py-2 w-full rounded-lg text-sm"
//           >
//             Search
//           </button>
//           <button
//             onClick={props.reset}
//             className="bg-[#80C22F] text-white px-4 py-2 w-full rounded-lg text-sm"
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//       <div className="hidden sm:flex  sm:flex-row flex-col sm:items-center gap-3">
//         <div className="sm:flex-1">
//           <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
//             <label
//               htmlFor="supportType"
//               className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
//             >
//               Support Type
//             </label>
//             <select
//               value={props.supportType || ""}
//               onChange={(e) => props.setSupportType(e.target.value)}
//               name="supportType"
//               id="supportType"
//               className="block w-full outline-none bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
//             >
//               <option value="">All</option>
//               <option value="Technical">Technical</option>
//               <option value="Financial">Financial</option>
//               <option value="Mentorship">Mentorship</option>
//             </select>
//           </div>
//         </div>
//         <div className="sm:flex-1">
//           <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
//             <label
//               htmlFor="region"
//               className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
//             >
//               Region
//             </label>
//             <select
//               value={props.region || ""}
//               onChange={(e) => props.setRegion(e.target.value)}
//               name="region"
//               id="region"
//               className="block w-full outline-none bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
//             >
//               <option value="">All</option>
//               <option value="East Africa">East Africa</option>
//               <option value="Africa">Africa</option>
//               <option value="Sub Saharan Africa">Sub Saharan Africa</option>
//             </select>
//           </div>
//         </div>
//         <div className="sm:flex-1">
//           <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
//             <label
//               htmlFor="industry"
//               className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
//             >
//               Industry
//             </label>
//             <select
//               value={props.industry || ""}
//               onChange={(e) => props.setIndustry(e.target.value)}
//               name="industry"
//               id="industry"
//               className="block w-full outline-none bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
//             >
//               <option value="">All</option>
//               <option value="Agriculture">Agriculture</option>
//               <option value="Fintech">Fintech</option>
//               <option value="Ed-Tech">Ed-Tech</option>
//               <option value="Health">Health</option>
//               <option value="Logistics">Logistics</option>
//               <option value="Manufacturing">Manufacturing</option>
//               <option value="Telecom">Telecom</option>
//               <option value="Transport">Transport</option>
//               <option value="Real Estate">Real Estate</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//         </div>
//         <div className="sm:flex-1">
//           <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
//             <label
//               htmlFor="name"
//               className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
//             >
//               Search Name
//             </label>
//             <input
//               value={props.searchTerm || ""}
//               onChange={(e) => props.setSearchTerm(e.target.value)}
//               type="search"
//               name="name"
//               id="name"
//               placeholder="Search by name"
//               className="block w-full outline-none bg-transparent pl-8 border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
//             />
//             <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
//           </div>
//         </div>
//         <div className="sm:flex-1 flex items-center gap-3">
//           <button
//             onClick={props.filter}
//             className="bg-[#80C22F] text-white px-4 py-2 w-full rounded-lg text-sm"
//           >
//             Search
//           </button>
//           <button
//             onClick={props.reset}
//             className="bg-[#80C22F] text-white px-4 py-2 w-full rounded-lg text-sm"
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EsoSearch;

"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";

interface Props {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  industry: string;
  setIndustry: React.Dispatch<React.SetStateAction<string>>;
  supportType: string;
  setSupportType: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  search: boolean;
  reset: () => void;
  filter: () => void;
}

const EsoSearch = (props: Props) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="space-y-4">
      {/* Filter Toggle Button for Mobile */}
      <div className="flex items-center justify-end">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="flex sm:hidden items-center gap-2 bg-[#F4F4AC] text-[#88830C] px-4 py-2 rounded-lg shadow text-sm"
        >
          <FaFilter />
          Filter
        </button>
      </div>

      {/* Filters Section */}
      <div
        className={`flex flex-col sm:flex-row sm:items-center gap-4 ${
          showFilter ? "block" : "hidden sm:flex"
        }`}
      >
        {/* Support Type */}
        <div className="sm:flex-1">
          <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
            <label
              htmlFor="supportType"
              className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
            >
              Support Type
            </label>
            <select
              value={props.supportType || ""}
              onChange={(e) => props.setSupportType(e.target.value)}
              name="supportType"
              id="supportType"
              className="block w-full bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
            >
              <option value="">All</option>
              <option value="Technical">Technical</option>
              <option value="Financial">Financial</option>
              <option value="Mentorship">Mentorship</option>
            </select>
          </div>
        </div>

        {/* Region */}
        <div className="sm:flex-1">
          <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
            <label
              htmlFor="region"
              className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
            >
              Region
            </label>
            <select
              value={props.region || ""}
              onChange={(e) => props.setRegion(e.target.value)}
              name="region"
              id="region"
              className="block w-full bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
            >
              <option value="">All</option>
              <option value="East Africa">East Africa</option>
              <option value="Africa">Africa</option>
              <option value="Sub Saharan Africa">Sub Saharan Africa</option>
            </select>
          </div>
        </div>

        {/* Industry */}
        <div className="sm:flex-1">
          <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
            <label
              htmlFor="industry"
              className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
            >
              Industry
            </label>
            <select
              value={props.industry || ""}
              onChange={(e) => props.setIndustry(e.target.value)}
              name="industry"
              id="industry"
              className="block w-full bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
            >
              <option value="">All</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Fintech">Fintech</option>
              <option value="Ed-Tech">Ed-Tech</option>
              <option value="Health">Health</option>
              <option value="Logistics">Logistics</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Telecom">Telecom</option>
              <option value="Transport">Transport</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Search Name */}
        <div className="sm:flex-1">
          <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
            <label
              htmlFor="name"
              className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
            >
              Search Name
            </label>
            <input
              value={props.searchTerm || ""}
              onChange={(e) => props.setSearchTerm(e.target.value)}
              type="search"
              name="name"
              id="name"
              placeholder="Search Program Name"
              className="block w-full bg-transparent pl-8 border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm outline-none"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Buttons */}
        <div className="sm:flex-1 flex items-center gap-3">
          <button
            onClick={props.filter}
            className="bg-[#80C22F] text-white px-4 py-2 w-full rounded-lg text-sm"
          >
            Search
          </button>
          <button
            onClick={props.reset}
            className="bg-[#80C22F] text-white px-4 py-2 w-full rounded-lg text-sm"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default EsoSearch;
