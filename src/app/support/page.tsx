import { esoData } from "@/data/esoData";

const Support = () => {
  return (
    <div className="p-4">
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
          {esoData.map((program, index) => (
            <tr key={index} className="border-b border-[#D5D5D5]">
              <td className="p-3">{program.name}</td>
              <td className="p-3 hidden sm:table-cell">{program.esoType}</td>
              <td className="p-3 hidden sm:table-cell">
                {program.supportType}
              </td>

              <button className="text-[#80C22F] whitespace-nowrap border border-[#80C22F] p-2 text-xs sm:p-3 rounded-md">
                {program.actions}
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Support;
