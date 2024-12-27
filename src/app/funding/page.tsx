

import EsoModal from "@/components/ESOModal";
import { fundingPrograms } from "@/data/fundingData";

const Funding = () => {
  return (
    <div className="p-4">
      <table className="w-full">
        <thead className="bg-[#80C22F] text-white font-semibold sm:font-bold text-sm sm:text-lg">
          <tr>
            <th className="sm:p-3 py-2 text-left">Name</th>
            <th className="p-3  text-left hidden sm:table-cell">Industry</th>
            <th className="p-3  text-left hidden sm:table-cell">Region</th>
            <th className="p-3  text-left hidden sm:table-cell">Business Stage</th>
            <th className="sm:py-3 py-2  text-left">Funding Type</th>
            <th className="p-3  text-left hidden sm:table-cell">Amount</th>
            <th className="sm:p-3 py-2 text-left ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {fundingPrograms.map((program, index) => (
            <tr key={index} className="border-b border-[#D5D5D5]">
              <td className="p-3">{program.name}</td>
              <td className="p-3 hidden sm:table-cell">
                {program.industryFocus}
              </td>
              <td className="p-3 hidden sm:table-cell">
                {program.locations.join(", ")}
              </td>
              <td className="p-3 hidden sm:table-cell">
                {program.entrepreneurialStage}
              </td>
              <td className="p-3">{program.fundingType}</td>
              <td className="p-3 hidden sm:table-cell">
                {program.amount.min} - {program.amount.max}{" "}
                {program.amount.currency}
              </td>
              <td className="p-3">
                <EsoModal program={program} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Funding;