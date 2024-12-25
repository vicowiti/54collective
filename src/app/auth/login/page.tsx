import Link from "next/link";

const Login = () => {
  return (
    <div className="sm:p-20 p-8">
      <div className="mb-10">
        <h1 className="font-bold text-2xl text-center">
          Login To Your Account
        </h1>
        <p className="text-sm text-center">
          Login to access customized content
        </p>
      </div>

      <div>
        <button className="flex items-center justify-between border gap-2 w-full   p-2 rounded-md">
            <img src="/google.png" alt="google logo" />
            Login with Google
            <p></p>
        </button>
      </div>

      <form action="" className="mt-10">
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
            id="email"
            className="mt-1 p-3 block w-full bg-[#f6f9f8] rounded-md outline-none border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
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
            id="password"
            className="mt-1 p-3 block w-full bg-[#f6f9f8] rounded-md outline-none border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-[#64B500] text-white py-2 rounded-md "
          >
            Login
          </button>
        </div>
        <div className="mt-3">
          <p className="text-right underline">Forgot Password?</p>
          <p className="font-bold">
            {`Don't have an account? `}
            <Link href={`/auth/register`} className="text-[#E7C30C]">
              Register
            </Link>
          </p>
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default Login;
