// import { useState } from "react";
// import { IconType } from "react-icons";
// import { FaSearch, FaFilter } from "react-icons/fa";
// import { MdOutlineAttachMoney } from "react-icons/md";

// interface Props {
//   searchTerm: string;
//   setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
//   region: string;
//   setRegion: React.Dispatch<React.SetStateAction<string>>;
//   industry: string;
//   setIndustry: React.Dispatch<React.SetStateAction<string>>;
//   fundingType: string;
//   setFundingType: React.Dispatch<React.SetStateAction<string>>;
//   amount: string;
//   setAmount: React.Dispatch<React.SetStateAction<string>>;
//   setSearch: React.Dispatch<React.SetStateAction<boolean>>;
//   search: boolean;
//   filter: () => void;
//   reset: () => void;
// }

// const FundingSearch: React.FC<Props> = ({
//   searchTerm,
//   setSearchTerm,
//   region,
//   setRegion,
//   industry,
//   setIndustry,
//   fundingType,
//   setFundingType,
//   amount,
//   setAmount,
//   filter,
//   reset,
// }) => {
//   const [showFilter, setShowFilter] = useState(false);

//   const renderInput = (
//     id: string,
//     label: string,
//     value: string,
//     onChange: React.Dispatch<React.SetStateAction<string>>,
//     placeholder = "",
//     Icon?: IconType
//   ) => (
//     <div className="sm:flex-1">
//       <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
//         <label
//           htmlFor={id}
//           className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
//         >
//           {label}
//         </label>
//         <input
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           type="text"
//           name={id}
//           id={id}
//           placeholder={placeholder}
//           className={`block w-full outline-none bg-transparent ${
//             Icon ? "pl-8" : "p-0"
//           } border-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm`}
//         />
//         {Icon && (
//           <Icon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
//         )}
//       </div>
//     </div>
//   );

//   const renderSelect = (
//     id: string,
//     label: string,
//     value: string,
//     onChange: React.Dispatch<React.SetStateAction<string>>,
//     options: string[]
//   ) => (
//     <div className="sm:flex-1">
//       <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
//         <label
//           htmlFor={id}
//           className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
//         >
//           {label}
//         </label>
//         <select
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           name={id}
//           id={id}
//           className="block w-full outline-none bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
//         >
//           <option value="">All</option>
//           {options.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );

//   return (
//     <div>
//       {/* Toggle Filter Button */}
//       <div className="flex items-center justify-end gap-4">
//         <button
//           onClick={() => setShowFilter(!showFilter)}
//           className="flex sm:hidden shadow text-sm mb-3 items-center gap-2 bg-[#F4F4AC] text-[#88830C] px-4 py-2 rounded-lg"
//         >
//           <FaFilter />
//           {showFilter ? "Hide" : "Filter"}
//         </button>
//       </div>

//       {/* Filters Section */}
//       <div
//         style={{ display: showFilter ? "block" : "none" }}
//         className="flex sm:flex-row flex-col sm:items-center gap-3"
//       >
//         {renderSelect(
//           "fundingType",
//           "Funding Type",
//           fundingType,
//           setFundingType,
//           ["Technical", "Financial", "Mentorship"]
//         )}
//         {renderInput(
//           "amount",
//           "Amount",
//           amount,
//           setAmount,
//           "Enter amount",
//           MdOutlineAttachMoney
//         )}
//         {renderSelect("region", "Region", region, setRegion, [
//           "East Africa",
//           "Africa",
//           "Sub Saharan Africa",
//         ])}
//         {renderSelect("industry", "Industry", industry, setIndustry, [
//           "Agriculture",
//           "Fintech",
//           "Ed-Tech",
//           "Health",
//           "Logistics",
//           "Manufacturing",
//           "Telecom",
//           "Transport",
//           "Real Estate",
//           "Other",
//         ])}
//         {renderInput(
//           "searchTerm",
//           "Search Name",
//           searchTerm,
//           setSearchTerm,
//           "Search by name",
//           FaSearch
//         )}
//         <div className="sm:flex-1 flex items-center gap-3">
//           <button
//             onClick={filter}
//             className="bg-[#80C22F] text-white px-4 py-2 w-full rounded-lg text-sm"
//           >
//             Search
//           </button>
//           <button
//             onClick={reset}
//             className="bg-[#80C22F] text-white px-4 py-2 w-full rounded-lg text-sm"
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FundingSearch;

import { useState } from "react";
import { IconType } from "react-icons";
import { FaSearch, FaFilter, FaRedo } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";

interface Props {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  industry: string;
  setIndustry: React.Dispatch<React.SetStateAction<string>>;
  fundingType: string;
  setFundingType: React.Dispatch<React.SetStateAction<string>>;
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  search: boolean;
  filter: () => void;
  reset: () => void;
}

const FundingSearch: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  region,
  setRegion,
  industry,
  setIndustry,
  fundingType,
  setFundingType,
  amount,
  setAmount,
  filter,
  reset,
}) => {
  const [showFilter, setShowFilter] = useState(false);

  const renderInput = (
    id: string,
    label: string,
    value: string,
    onChange: React.Dispatch<React.SetStateAction<string>>,
    placeholder = "",
    Icon?: IconType
  ) => (
    <div className="sm:flex-1 mb-3">
      <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
        <label
          htmlFor={id}
          className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
        >
          {label}
        </label>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          name={id}
          id={id}
          placeholder={placeholder}
          className={`block w-full outline-none bg-transparent ${
            Icon ? "pl-8" : "p-0"
          } border-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm`}
        />
        {Icon && (
          <Icon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        )}
      </div>
    </div>
  );

  const renderSelect = (
    id: string,
    label: string,
    value: string,
    onChange: React.Dispatch<React.SetStateAction<string>>,
    options: string[]
  ) => (
    <div className="sm:flex-1 mb-3">
      <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
        <label
          htmlFor={id}
          className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
        >
          {label}
        </label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          name={id}
          id={id}
          className="block w-full outline-none bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        >
          <option value="">All</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  return (
    <div>
      {/* Toggle Filter Button */}
      <div className="flex items-center justify-end gap-4">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="flex sm:hidden shadow text-sm mb-3 items-center gap-2 bg-[#F4F4AC] text-[#88830C] px-4 py-2 rounded-lg"
        >
          <FaFilter />
          {showFilter ? "Hide" : "Filter"}
        </button>
      </div>

      {/* Filters Section */}
      <div
        className={`sm:flex sm:flex-row flex-col sm:items-center gap-3  ${
          showFilter ? "flex" : "hidden"
        }`}
      >
        {renderSelect(
          "fundingType",
          "Funding Type",
          fundingType,
          setFundingType,
          ["Technical", "Financial", "Mentorship"]
        )}
        {renderInput(
          "amount",
          "Amount",
          amount,
          setAmount,
          "Enter amount",
          MdOutlineAttachMoney
        )}
        {renderSelect("region", "Region", region, setRegion, [
          "East Africa",
          "Africa",
          "Sub Saharan Africa",
        ])}
        {renderSelect("industry", "Industry", industry, setIndustry, [
          "Agriculture",
          "Fintech",
          "Ed-Tech",
          "Health",
          "Logistics",
          "Manufacturing",
          "Telecom",
          "Transport",
          "Real Estate",
          "Other",
        ])}
        {renderInput(
          "searchTerm",
          "Search Name",
          searchTerm,
          setSearchTerm,
          "Program Name",
          FaSearch
        )}
        <div className="sm:flex-1 mb-3 flex items-center gap-3">
          <button
            onClick={filter}
            className="flex items-center justify-center gap-2 bg-[#80C22F] text-white px-4 py-2 w-full rounded-lg text-sm"
          >
            <FaSearch />
            Search
          </button>
          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 bg-[#80C22F] text-white px-4 py-2 w-full rounded-lg text-sm"
          >
            <FaRedo />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundingSearch;
