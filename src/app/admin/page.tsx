import User from "../models/User";
import dbConnect from "../utils/dbConnect";

const Page = async () => {
  await dbConnect();
  const data = await User.find().select("-password");

  return (
    <div>
      <h3 className="font-bold mt-4 text-xl">Users Signed Up</h3>

      <table className="min-w-full divide-y mt-3 divide-gray-300">
        <thead className="bg-[#64b500]">
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-white sm:pl-6"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-bold text-white"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-bold text-white"
            >
              Phone
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-bold text-white"
            >
              Gender
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-transparent">
          {data.map((person) => (
            <tr key={person.email}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                {person.name}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {person.email}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {person.phoneNumber}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {person.gender}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
