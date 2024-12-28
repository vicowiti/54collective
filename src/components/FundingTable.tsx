"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { PiSpinner } from "react-icons/pi";

interface EventItem {
  _id: string;
  companyName: string;
  industry: string;
  region: string;
  businessStage: string;
  fundingType: string;
  esoType: string;
  supportType: string;
    amount: number;
  website: string;
 
}

const FundingTable = () => {
  const [data, setData] = useState<EventItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get("/api/funding/getFunding");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching listinh:", error);
        setError("Error loading listing. Please try again later.");
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <p className="text-xl text-center flex gap-5 justify-center items-center">
        <PiSpinner className="animate-spin"/> Loading Funding List...
      </p>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  
    return (
      <section>
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
                       {program.industry}
                     </td>
                     <td className="p-3 hidden sm:table-cell">
                       {program.region}
                     </td>
                     <td className="p-3 hidden sm:table-cell">
                       {program.businessStage}
                     </td>
                     <td className="p-3">{program.fundingType}</td>
                     <td className="p-3 hidden sm:table-cell">
                       {program.amount} $
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

export default FundingTable;
