"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaLocationDot } from "react-icons/fa6";
import { ESOData } from "@/data/esoData";
import { FaTimes } from "react-icons/fa";

interface Props {
  program: ESOData;
}

export default function EsoModal({ program }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="text-[#80C22F] whitespace-nowrap border border-[#80C22F] px-3 py-2 text-xs sm:px-4 sm:py-3 rounded-md"
      >
        View Details
      </button>

      {/* Modal */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          {/* Background Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative w-full pb-5 max-w-4xl transform rounded-lg bg-white p-6 text-left shadow-xl transition-all">
                  {/* Header */}
                  <div className="p-3 rounded-full hover:bg-gray-100 absolute right-2 top-2">
                    <FaTimes onClick={() => setOpen(false)} />
                  </div>
                  <header className="flex flex-col pt-5 sm:flex-row justify-between items-start sm:items-center mb-6">
                    <div>
                      <h2 className="text-xl font-bold mb-2">
                        {program.ProgramName}
                      </h2>
                      <p className="flex items-center text-sm text-[#4F4F4F]">
                        <FaLocationDot className="mr-2" />
                        {program.RegionalFocus}
                      </p>
                    </div>
                    <a
                      target="_blank"
                      href={program.WebsiteLink}
                      className="mt-4 sm:mt-0 bg-[#64B500] text-white text-xs px-4 py-2 rounded-md"
                    >
                      Learn More
                    </a>
                  </header>

                  {/* Content */}
                  <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-4">
                      <InfoRow
                        label="Organization"
                        value={program.Organization}
                      />
                      <InfoRow
                        label="Type of Support"
                        value={program.TypeofSupport}
                      />
                      <InfoRow label="Industry" value={program.Industry} />
                      <InfoRow
                        label="Target Entrepreneurs"
                        value={program.TargetEntrepreneurs}
                      />
                      <InfoRow
                        label="Eligibility Criteria"
                        value={program.EligibilityCriteria}
                      />
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-4">
                      <InfoRow
                        label="Program Duration"
                        value={program.ProgramDuration}
                      />
                      <InfoRow
                        label="Mode of Delivery"
                        value={program.ModeofDelivery}
                      />
                      <InfoRow label="Fees" value={program.Fees} />
                      <InfoRow
                        label="Impact Metrics"
                        value={program.ImpactMetrics}
                      />
                      <InfoRow
                        label="Application Process"
                        value={program.ApplicationProcess}
                      />
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

// Reusable Component for Info Rows
function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <p className="text-sm text-[#8C8C8C] flex">
      <span className="flex-1">{label}:</span>{" "}
      <span className="font-semibold text-black flex-1">{value}</span>
    </p>
  );
}
