import { FaPlus } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className="mt-10 bg-white p-4 sm:p-10">
      <div>
        <div className="bg-gradient-to-r from-[#64B500] to-[#B0DE77] p-20 rounded-t-xl"></div>
        <div className="bg-white p-20 rounded-t-xl"></div>
      </div>
      <div className="border rounded-2xl p-10 sm:p-10">
        <header className="flex justify-between">
          <h3 className="font-bold text-xl">Personal Information</h3>
          <button className="px-3 py-2 border rounded-lg">Edit</button>
        </header>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Full Name
            </label>
            <input
              type="text"
              className="bg-[#f6f9f8] border outline-none p-3 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              className="bg-[#f6f9f8] border outline-none p-3 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              className="bg-[#f6f9f8] border outline-none p-3 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="gender" className="font-semibold">
              Gender
            </label>
            <input
              type="text"
              className="bg-[#f6f9f8] border outline-none p-3 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="my-3 p-3 rounded-xl flex items-center gap-2 text-[#64B501] bg-[#f1fce7]">
          <FaPlus /> Add Company Info
        </button>
      </div>
      <div className="border rounded-2xl p-4 sm:p-10 mt-5">
        <header className="flex justify-between">
          <h3 className="font-bold text-xl">Company Information</h3>
        </header>

        <div className="grid grid-cols-1 gap-10 mt-3 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Company Name
            </label>
            <input
              type="text"
              className="bg-[#f6f9f8] border outline-none p-3 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="stage" className="font-semibold">
              Entrepreneurship stage
            </label>
            <input
              type="text"
              className="bg-[#f6f9f8] border outline-none p-3 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-semibold">
              Organization size
            </label>
            <input
              type="text"
              className="bg-[#f6f9f8] border outline-none p-3 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="gender" className="font-semibold">
              Industry
            </label>
            <input
              type="text"
              className="bg-[#f6f9f8] border outline-none p-3 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="gender" className="font-semibold">
            Website Link
          </label>
          <input
            type="text"
            className="bg-[#f6f9f8] border outline-none p-3 rounded-md"
          />
        </div>

        <div className="flex mt-3 justify-end">
          <button className="px-4 py-2 text-white bg-[#6BB90B] rounded-xl">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
