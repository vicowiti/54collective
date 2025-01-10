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

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         `/api/eso/getEsos?searchTerm=${searchTerm}&region=${region}&industry=${industry}&supportType=${supportType}`
  //       );
  //       setData(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching events:", error);
  //       setError("Error loading events. Please try again later.");
  //       setLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, [search]);

  // if (loading) {
  //   return (
  //     <p className="text-xl text-center flex gap-5 justify-center items-center">
  //       <PiSpinner className="animate-spin" /> Loading ESOs...
  //     </p>
  //   );
  // }

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
          {esoData?.map((program, index) => (
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
