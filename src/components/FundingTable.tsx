"use client";
import FundingSearch from "./FundingSearch";
import FundingModal from "./FundingModal";
import { fundingPrograms } from "@/data/fundingData";
import { useState } from "react";

export interface FundingOrganization {
  _id: string;

  companyName: string;
  fundingType: string;
  website: string;
  contactInfo: string;
  businessStage: string;
  industryFocus: string;
  fundingAmountRange: string;
  nonMonetarySupport: string;
  applicationDeadline: string;
  applicationFrequency: string;
  eligibilityCriteria: string;
  requiredDocuments: string;
  evaluationCriteria: string;
  countryRegionFocus: string;
  pastRecipients: string;
  durationOfSupport: string;
  restrictionsExclusions: string;
  programDetails: string; // Fixed typo in key from "PprogramDetails" to "programDetails"
  faqsGuidelines: string;
  currencyOfFunding: string;
  taxImplications: string;
}

const FundingTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [amount, setAmount] = useState("");
  const [region, setRegion] = useState("");
  const [industry, setIndustry] = useState("");
  const [fundingType, setfundingType] = useState("");
  const [search, setSearch] = useState(false);
  const [data, setData] = useState(fundingPrograms);

  const reset = () => {
    setAmount("");
    setRegion("");
    setIndustry("");
    setfundingType("");
    setSearchTerm("");
    setSearch(false);
    setData(fundingPrograms);
  };

  const filter = () => {
    const filteredData = fundingPrograms.filter((program) => {
      const matchesSearchTerm =
        program.NameofFund.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.CountryRegionFocus.toLowerCase().includes(
          searchTerm.toLowerCase()
        ) ||
        program.IndustryFocus.toLowerCase().includes(
          searchTerm.toLowerCase()
        ) ||
        program.FundingType.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesAmount =
        amount === "" ||
        program.FundingAmountRange.toLowerCase().includes(amount.toLowerCase());

      const matchesRegion =
        region === "" ||
        program.CountryRegionFocus.toLowerCase().includes(region.toLowerCase());

      const matchesIndustry =
        industry === "" ||
        program.IndustryFocus.toLowerCase().includes(industry.toLowerCase());

      const matchesFundingType =
        fundingType === "" ||
        program.FundingType.toLowerCase().includes(fundingType.toLowerCase());

      return (
        matchesSearchTerm &&
        matchesAmount &&
        matchesRegion &&
        matchesIndustry &&
        matchesFundingType
      );
    });

    setData(filteredData);
  };

  return (
    <section>
      <div className="my-3">
        <FundingSearch
          amount={amount}
          setAmount={setAmount}
          industry={industry}
          setIndustry={setIndustry}
          region={region}
          setRegion={setRegion}
          fundingType={fundingType}
          setfundingType={setfundingType}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          search={search}
          setSearch={setSearch}
          filter={filter}
          reset={reset}
        />
      </div>

      <table className="w-full max-w-screen">
        <thead className="bg-[#80C22F] text-white  font-semibold sm:font-bold text-sm sm:text-lg">
          <tr>
            <th className="sm:p-3 py-2 text-left">Name of Fund</th>
            <th className="p-3  text-left hidden sm:table-cell">
              Organization
            </th>
            <th className="p-3  text-left hidden sm:table-cell">
              Business Stage
            </th>
            <th className="sm:py-3 py-2  text-left">Funding Type</th>
            <th className="p-3  text-left hidden sm:table-cell">Amount</th>
            <th className="p-3  text-left hidden sm:table-cell">
              Eligibility Criteria
            </th>
            <th className="sm:p-3 py-2 text-left ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((program, index) => (
            <tr key={index} className="border-b border-[#D5D5D5]">
              <td className="p-3 text-sm ">{program.NameofFund}</td>
              <td className="p-3 text-sm  hidden sm:table-cell">
                {program.Organization}
              </td>
              <td className="p-3 text-sm  hidden sm:table-cell">
                {program.BusinessStage}
              </td>
              <td className="p-3 text-sm ">
                {program.FundingType}
                <p className=" sm:hidden ">{program.FundingAmountRange}</p>
              </td>
              <td className="p-3 text-sm  hidden sm:table-cell">
                {program.FundingAmountRange}
              </td>
              <td className="p-3  text-sm  hidden sm:table-cell">
                {program.EligibilityCriteria}
              </td>
              <td className="p-3">
                <FundingModal program={program} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default FundingTable;
