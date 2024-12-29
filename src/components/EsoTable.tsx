"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { PiSpinner } from "react-icons/pi";
import EsoSearch from "./EsoSearch";

interface EventItem {
  _id: string;
  esoType: string;
  supportType: string;
  Website: string;
  companyName: string;
  website?: string;
  time?: string;
}

const EsoTable = () => {
  const [data, setData] = useState<EventItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [industry, setIndustry] = useState("");
  const [supportType, setSupportType] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(
          `/api/eso/getEsos?searchTerm=${searchTerm}&region=${region}&industry=${industry}&supportType=${supportType}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Error loading events. Please try again later.");
        setLoading(false);
      }
    }

    fetchData();
  }, [industry, region, searchTerm, supportType]);

  if (loading) {
    return (
      <p className="text-xl text-center flex gap-5 justify-center items-center">
        <PiSpinner className="animate-spin" /> Loading ESOs...
      </p>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

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
        />
      </div>

      <table className="w-full">
        <thead className="bg-[#80C22F] text-white font-semibold sm:font-bold text-sm sm:text-lg">
          <tr>
            <th className="sm:p-3 py-2 text-left">Name</th>
            <th className="p-3  text-left hidden sm:table-cell">ESO Type</th>
            <th className="p-3  text-left hidden sm:table-cell">
              Support Type
            </th>

            <th className="sm:p-3 py-2 text-left ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((program, index) => (
            <tr key={index} className="border-b border-[#D5D5D5]">
              <td className="p-3">{program.companyName}</td>
              <td className="p-3 hidden sm:table-cell">{program.esoType}</td>
              <td className="p-3 hidden sm:table-cell">
                {program.supportType}
              </td>

              <td className="p-3">
                <a
                  className="text-[#80C22F] whitespace-nowrap border border-[#80C22F] p-2 text-xs sm:p-2 rounded-md"
                  href={program.website}
                  target="_blank"
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EsoTable;
