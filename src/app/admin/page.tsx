"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { PiSpinnerGapBold } from "react-icons/pi";

const Page = () => {
  const [userData, setUserData] = useState<
    {
      email: string;
      gender: string;
      name: string;
      phoneNumber: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getdata() {
      setLoading(true);
      const data = await axios.get("/api/auth/getUser");

      if (data.status == 200) {
        setUserData(data.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
    getdata();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center flex-col items-center h-screen/2 mt-3">
        <PiSpinnerGapBold className="animate-spin rounded-full h-12 w-12  border-gray-900" />
        <p>Loading Users...</p>
      </div>
    );
  }

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
          {userData.map((person) => (
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
