"use client";

import { Disclosure,  } from "@headlessui/react";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment } from "react";


const Navbar = () => {
  return (
    <nav className="p-3 bg-[#2a2a27] ">
      <div className="max-w-[1340px] mx-auto">
        <Disclosure as="nav" className="flex-shrink-0 ">
          {({ open }) => (
            <>
              <div className=" px- sm:px-4 lg:px-">
                <div className="relative flex h-16 items-center justify-between">
                  {/* Logo section */}
                  <div className="flex items-center px-2 lg:px-0 xl:w-64">
                    <Link href="/" className="flex-shrink-0">
                      <img
                       
                        className="h-8 sm:h-10 w-auto"
                        src="/landing/logo.png"
                        alt="Your Company"
                      />
                    </Link>
                  </div>

                  {/* Search section */}
                  <div className="flex flex-1 justify-center lg:justify-end">
                    <div className="w-full px-2 lg:px-6">
                      <label htmlFor="search" className="sr-only">
                        Search projects
                      </label>
                      <div className="relative text-indigo-200 focus-within:text-gray-400">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <MagnifyingGlassIcon
                            className="h-5 w-5 text-[#737373]"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full outline-none  sm:w-2/3 rounded-md   bg-transparent text-[#737373] border border-[#737373] bg-opacity-25 py-2 sm:py-3 pl-10 pr-3 leading-5  placeholder-indigo-200  sm:text-sm"
                          placeholder="Search "
                          type="search"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md  p-2 text-white    ">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3CenterLeftIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  {/* Links section */}
                  <div className="hidden lg:block ">
                    <div className="flex items-center justify-end">
                      <div className="flex">
                        <a
                          href="#"
                          className="rounded-md px-3 py-2 text-sm font-medium text-indigo-200 hover:text-white"
                        >
                          Solutions
                        </a>
                        <a
                          href="#"
                          className="rounded-md px-3 py-2 text-sm font-medium text-indigo-200 hover:text-white"
                        >
                          Resources
                        </a>
                      </div>
                      {/* Profile dropdown */}
                      <div className="flex gap-3">
                        <Link href={`/auth/login`} className="py-2.5 px-4 bg-transparent text-[#64B500] border border-[#64B500] rounded-md">
                          Login
                        </Link>
                        <Link href={`/auth/register`} className="py-2.5 px-4 bg-[#64B500] rounded-md text-white">Sign Up</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="px-2 pt-2 pb-3">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md  px-3 py-2 text-base font-medium text-white"
                  >
                    Home
                  </Disclosure.Button>
                 
                </div>
                <div className="border-t border-[#f4f4f4] pt-4 pb-3">
                  <div className="px-2">
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-indigo-200 hover:bg-indigo-600 hover:text-indigo-100"
                    >
                      Your Profile
                    </Disclosure.Button>
                   
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-indigo-200 hover:bg-indigo-600 hover:text-indigo-100"
                    >
                      Sign out
                    </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </nav>
  );
};

export default Navbar;
