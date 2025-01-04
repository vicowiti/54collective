"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { PiSpinner } from "react-icons/pi";
import FundingSearch from "./FundingSearch";
import FundingModal from "./FundingModal";

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
  const [data, setData] = useState<FundingOrganization[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [amount, setAmount] = useState("");
  const [region, setRegion] = useState("");
  const [industry, setIndustry] = useState("");
  const [fundingType, setfundingType] = useState("");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(
          `/api/funding/getFunding?searchTerm=${searchTerm}&region=${region}&industry=${industry}&fundingType=${fundingType}&amount=${amount}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching listing:", error);
        setError("Error loading listing. Please try again later.");
        setLoading(false);
      }
    }

    fetchData();
  }, [search]);

  if (loading) {
    return (
      <p className="text-xl text-center flex gap-5 justify-center items-center">
        <PiSpinner className="animate-spin" /> Loading Funding List...
      </p>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

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
        />
      </div>

      <table className="w-full">
        <thead className="bg-[#80C22F] text-white font-semibold sm:font-bold text-sm sm:text-lg">
          <tr>
            <th className="sm:p-3 py-2 text-left">Name</th>
            <th className="p-3  text-left hidden sm:table-cell">Industry</th>
            <th className="p-3  text-left hidden sm:table-cell">Region</th>
            <th className="p-3  text-left hidden sm:table-cell">
              Business Stage
            </th>
            <th className="sm:py-3 py-2  text-left">Funding Type</th>
            <th className="p-3  text-left hidden sm:table-cell">Amount</th>
            <th className="sm:p-3 py-2 text-left ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((program, index) => (
            <tr key={index} className="border-b border-[#D5D5D5]">
              <td className="p-3">{program.companyName}</td>
              <td className="p-3 hidden sm:table-cell">
                {program.industryFocus}
              </td>
              <td className="p-3 hidden sm:table-cell">
                {program.countryRegionFocus}
              </td>
              <td className="p-3 hidden sm:table-cell">
                {program.businessStage}
              </td>
              <td className="p-3">{program.fundingType}</td>
              <td className="p-3 hidden sm:table-cell">
                {program.fundingAmountRange} $
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
