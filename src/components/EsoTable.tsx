"use client";
import EsoSearch from "./EsoSearch";
import EsoModal from "./ESOModal";
import { esoData } from "@/data/esoData";
import { useState } from "react";

export interface EntrepreneurialSupportOrganization {
  _id: string;
  esoName: string;
  typeOfSupportProvided: string;
  websiteUrl: string;
  contactInformation: string;
  targetEntrepreneurs: string;
  industryFocus: string;
  eligibilityCriteria: string;
  programsOffered: string;
  programDuration: string;
  modeOfDelivery: string;
  coreServices: string;
  location: string;
  regionalFocus: string;
  networkingOpportunities: string;
  alumniNetwork: string;
  impactMetrics: string;
  specialFocusAreas: string;
  partnerships: string;
  fees: string;
  applicationProcess: string;
  languagesSupported: string;
}

const EsoTable = () => {
  // const [data, setData] = useState<EntrepreneurialSupportOrganization[]>([]);
  // const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [industry, setIndustry] = useState("");
  const [supportType, setSupportType] = useState("");
  const [search, setSearch] = useState(false);
  const [data, setData] = useState(esoData);

  const reset = () => {
    setRegion("");
    setIndustry("");
    setSupportType("");
    setSearchTerm("");
    setData(esoData);
  };

  const filter = () => {
    const filteredData = esoData.filter((program) => {
      const matchesSearchTerm =
        program.ProgramName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.TargetEntrepreneurs.toLowerCase().includes(
          searchTerm.toLowerCase()
        ) ||
        program.TypeofSupport.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRegion =
        region === "" ||
        program.RegionalFocus.toLowerCase().includes(region.toLowerCase());

      const matchesIndustry =
        industry === "" ||
        program.Industry.toLowerCase().includes(industry.toLowerCase());

      const matchesSupportType =
        supportType === "" ||
        program.TypeofSupport.toLowerCase().includes(supportType.toLowerCase());

      return (
        matchesSearchTerm &&
        matchesRegion &&
        matchesIndustry &&
        matchesSupportType
      );
    });

    setData(filteredData);
  };

  return (
    <section>
      <div className="my-3">
        <EsoSearch
          industry={industry}
          region={region}
          searchTerm={searchTerm}
          supportType={supportType}
          setIndustry={setIndustry}
          setRegion={setRegion}
          setSearchTerm={setSearchTerm}
          setSupportType={setSupportType}
          setSearch={setSearch}
          search={search}
          reset={reset}
          filter={filter}
        />
      </div>

      <table className="w-full">
        <thead className="bg-[#80C22F] text-white font-semibold sm:font-bold text-sm sm:text-lg">
          <tr>
            <th className="sm:p-3 py-2 text-left">Name</th>
            <th className="p-3  text-left hidden sm:table-cell">Program</th>
            <th className="p-3  text-left hidden sm:table-cell">
              Support Type
            </th>

            <th className="sm:p-3 py-2 text-left ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((program, index) => (
            <tr key={index} className="border-b border-[#D5D5D5]">
              <td className="p-3">{program.ProgramName}</td>
              <td className="p-3 hidden sm:table-cell">
                {program.TargetEntrepreneurs}
              </td>
              <td className="p-3 hidden sm:table-cell">
                {program.TypeofSupport}
              </td>

              <td className="p-3">
                <EsoModal program={program} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EsoTable;
