import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";

interface Props {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  industry: string;
  setIndustry: React.Dispatch<React.SetStateAction<string>>;
  fundingType: string;
  setfundingType: React.Dispatch<React.SetStateAction<string>>;
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  search: boolean;
}

const FundingSearch = (props: Props) => {
  const [showFilter, setShowFilter] = useState(false);
  const handleSearch = () => {
    props.setSearch(!props.search);
  };

  const handleReset = () => {
    props.setSearchTerm("");
    props.setRegion("");
    props.setIndustry("");
    props.setfundingType("");
    props.setAmount("");

    props.setSearch(!props.search);
  };

  return (
    <div>
      <div className="flex items-center justify-end gap-4">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="flex sm:hidden shadow text-sm mb-3 items-center gap-2 bg-[#F4F4AC] text-[#88830C] px-4 py-2 rounded-lg"
        >
          <FaFilter />
          {showFilter ? "Hide" : "Filter"}
        </button>
      </div>
      <div
        style={{ display: showFilter ? "block" : "none" }}
        className="flex sm:flex-row flex-col sm:items-center gap-3"
      >
        <div className="sm:flex-1">
          <div className="relative rounSded-md border border-gray-300 px-3 py-2 shadow-sm">
            <label
              htmlFor="supportType"
              className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
            >
              Funding Type
            </label>
            <select
              value={props.fundingType || ""}
              onChange={(e) => props.setfundingType(e.target.value)}
              name="fundingType"
              id="fundingType"
              className="block w-full outline-none bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            >
              <option value="">All</option>
              <option value="Technical">Technical</option>
              <option value="Financial">Financial</option>
              <option value="Mentorship">Mentorship</option>
            </select>
          </div>
        </div>
        <div className="sm:flex-1">
          <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
            <label
              htmlFor="name"
              className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
            >
              Amount
            </label>
            <input
              value={props.amount || ""}
              onChange={(e) => props.setSearchTerm(e.target.value)}
              type="search"
              name="name"
              id="name"
              placeholder="Search by name"
              className="block w-full outline-none bg-transparent pl-8 border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            />
            <MdOutlineAttachMoney className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
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
              className="block w-full outline-none bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            >
              <option value="">All</option>
              <option value="East Africa">East Africa</option>
              <option value="Africa">Africa</option>
              <option value="Sub Saharan Africa">Sub Saharan Africa</option>
            </select>
          </div>
        </div>
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
              className="block w-full outline-none bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
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
              placeholder="Search by name"
              className="block w-full outline-none bg-transparent pl-8 border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="sm:flex-1 flex items-center gap-3">
          <button
            onClick={handleSearch}
            className="bg-[#80C22F] text-white px-4 py-2 w-full rounded-lg text-sm"
          >
            Search
          </button>
          <button
            onClick={handleReset}
            className="bg-[#80C22F] text-white px-4 py-2 w-full rounded-lg text-sm"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex hidded sm:flex sm:flex-row flex-col sm:items-center gap-3">
        <div className="sm:flex-1">
          <div className="relative rounSded-md border border-gray-300 px-3 py-2 shadow-sm">
            <label
              htmlFor="supportType"
              className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
            >
              Funding Type
            </label>
            <select
              value={props.fundingType || ""}
              onChange={(e) => props.setfundingType(e.target.value)}
              name="fundingType"
              id="fundingType"
              className="block w-full outline-none bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            >
              <option value="">All</option>
              <option value="Technical">Technical</option>
              <option value="Financial">Financial</option>
              <option value="Mentorship">Mentorship</option>
            </select>
          </div>
        </div>
        <div className="sm:flex-1">
          <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm">
            <label
              htmlFor="name"
              className="absolute -top-2 left-2 -mt-px inline-block bg-[#f4f4d4] px-1 text-xs font-medium text-gray-900"
            >
              Amount
            </label>
            <input
              value={props.amount || ""}
              onChange={(e) => props.setSearchTerm(e.target.value)}
              type="search"
              name="name"
              id="name"
              placeholder="Search by name"
              className="block w-full outline-none bg-transparent pl-8 border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            />
            <MdOutlineAttachMoney className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
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
              className="block w-full outline-none bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            >
              <option value="">All</option>
              <option value="East Africa">East Africa</option>
              <option value="Africa">Africa</option>
              <option value="Sub Saharan Africa">Sub Saharan Africa</option>
            </select>
          </div>
        </div>
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
              className="block w-full outline-none bg-transparent border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
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
              placeholder="Search by name"
              className="block w-full outline-none bg-transparent pl-8 border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="sm:flex-1 flex items-center gap-3">
          <button
            onClick={handleSearch}
            className="bg-[#80C22F] text-white px-4 py-2 w-full rounded-lg text-sm"
          >
            Search
          </button>
          <button
            onClick={handleReset}
            className="bg-[#80C22F] text-white px-4 py-2 w-full rounded-lg text-sm"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundingSearch;
