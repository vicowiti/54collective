"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaLocationDot } from "react-icons/fa6";
import { EntrepreneurialSupportOrganization } from "./EsoTable";

interface Props {
  program: EntrepreneurialSupportOrganization;
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
                <Dialog.Panel className="relative w-full max-w-4xl transform rounded-lg bg-white p-6 text-left shadow-xl transition-all">
                  {/* Header */}
                  <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <div>
                      <h2 className="text-xl font-bold mb-2">
                        {program.esoName}
                      </h2>
                      <p className="flex items-center text-sm text-[#4F4F4F]">
                        <FaLocationDot className="mr-2" />
                        {program.location}
                      </p>
                    </div>
                    <a
                      href={program.websiteUrl}
                      className="mt-4 sm:mt-0 bg-[#64B500] text-white text-xs px-4 py-2 rounded-md"
                    >
                      Apply
                    </a>
                  </header>

                  {/* Content */}
                  <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-4">
                      <InfoRow
                        label="Target Entrepreneurs"
                        value={program.targetEntrepreneurs}
                      />
                      <InfoRow
                        label="Industry Focus"
                        value={program.industryFocus}
                      />
                      <InfoRow label="Fees" value={program.fees} />
                      <InfoRow
                        label="Website Link"
                        value={
                          <a
                            href={program.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            {program.websiteUrl}
                          </a>
                        }
                      />
                      <InfoRow
                        label="Programs Offered"
                        value={program.programsOffered}
                      />
                      <InfoRow
                        label="Mode of Delivery"
                        value={program.modeOfDelivery}
                      />
                      <InfoRow
                        label="Program Duration"
                        value={program.programDuration}
                      />
                      <InfoRow
                        label="Core Services"
                        value={program.coreServices}
                      />
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-4">
                      <InfoRow
                        label="Networking Opportunities"
                        value={program.networkingOpportunities}
                      />
                      <InfoRow
                        label="Application Process"
                        value={program.applicationProcess}
                      />
                      <InfoRow
                        label="Languages Supported"
                        value={program.languagesSupported}
                      />
                      <InfoRow
                        label="Impact Metrics"
                        value={program.impactMetrics}
                      />
                    </div>
                  </section>

                  {/* Special Focus Areas */}
                  <section className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Special Focus Areas
                    </h3>
                    <p className="text-sm text-[#4F4F4F]">
                      {program.specialFocusAreas}
                    </p>
                  </section>

                  {/* Partnerships */}
                  <section className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Partnerships</h3>
                    <p className="text-sm text-[#4F4F4F]">
                      {program.partnerships}
                    </p>
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
    <p className="text-sm text-[#8C8C8C]">
      {label}: <span className="font-bold text-black">{value}</span>
    </p>
  );
}
