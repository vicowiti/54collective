import Link from "next/link";

const Register = () => {
  return (
    <div className="sm:p-20 p-8">
      <div className="mb-10">
        <h1 className="font-bold text-2xl text-center">Create Account</h1>
        <p className="text-sm text-center">to access customized content</p>
      </div>

      <div>
        <button className="flex items-center justify-between border gap-2 w-full   p-2 rounded-md">
          <img src="/google.png" alt="google logo" />
          Sign Up with Google
          <p></p>
        </button>
      </div>

      <form action="" className="mt-10">
       

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              id="name"
              className="mt-1 p-3 block w-full rounded-md outline-none border-gray-300 shadow-sm bg-[#f6f9f8]  sm:text-sm"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              id="email"
              className="mt-1 p-3 block w-full rounded-md outline-none border-gray-300 shadow-sm bg-[#f6f9f8]  sm:text-sm"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Phone"
              name="number"
              id="number"
              className="mt-1 p-3 block w-full rounded-md outline-none border-gray-300 shadow-sm bg-[#f6f9f8]  sm:text-sm"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <input
              type="text"
              name="gender"
              placeholder="Select Gender"
              id="gender"
              className="mt-1 p-3 block w-full rounded-md outline-none border-gray-300 shadow-sm bg-[#f6f9f8]  sm:text-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            id="password"
            className="mt-1 p-3 block w-full rounded-md outline-none border-gray-300 shadow-sm bg-[#f6f9f8]  sm:text-sm"
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-[#64B500] text-white py-2 rounded-md "
          >
            Sign Up
          </button>
        </div>
        <div className="mt-3">
          <p className="text-right underline">Forgot Password?</p>
          <p className="font-bold">
            {`Already have an account? `}
            <Link href={`/auth/login`} className="text-[#E7C30C]">
              Login
            </Link>
          </p>
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default Register;
