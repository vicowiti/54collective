"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FundingProgram } from "@/data/fundingData";
import { FaLocationDot } from "react-icons/fa6";

interface Props {
  program: FundingProgram;
}
export default function EsoModal(props: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-[#80C22F] whitespace-nowrap border border-[#80C22F] p-2 text-xs sm:p-3 rounded-md"
      >
        View Details
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-7xl sm:p-6">
                  <div>
                    <header className="flex flex-col sm:flex-row justify-between items-center">
                      <div>
                        <h2 className="font-bold text-xl my-2">
                          {props.program.name}
                        </h2>
                        <p className="flex items-center gap-3 text-[#4F4F4F]">
                          <FaLocationDot /> {props.program.locations.join(", ")}
                        </p>
                        <button className="bg-[#FDF9D6] px-2 py-1 text-[#E5CF00] text-xs my-2 rounded-md">
                          {props.program.status}
                        </button>
                      </div>
                      <div>
                        <button className="bg-[#64B500] text-white px-3 text-xs py-2 rounded-md">
                          Apply
                        </button>
                      </div>
                    </header>

                    <section className="flex flex-col sm:flex-row gap-4 my-4">
                      <div className="sm:flex-1 flex flex-col gap-3">
                        <p className="flex gap-3 text-sm text-[#8C8C8C]">
                          Target Entrepreneurs{" "}
                          <span className="font-bold text-black">
                            {props.program.entrepreneurialStage}
                          </span>
                        </p>
                        <p className="flex gap-3 text-sm text-[#8C8C8C]">
                          Industry Focus{" "}
                          <span className="font-bold text-black">
                            {props.program.industryFocus}
                          </span>
                        </p>
                        <p className="flex gap-3 text-sm text-[#8C8C8C]">
                          Fees{" "}
                          <span className="font-bold text-black">
                            {props.program.fees}
                          </span>
                        </p>
                        <p className="flex gap-3 text-sm text-[#8C8C8C]">
                          Website Link{" "}
                          <span className="font-bold text-black">
                            {props.program.websiteLink}
                          </span>
                        </p>
                        <p className="flex gap-3 text-sm text-[#8C8C8C]">
                          Programs Offered{" "}
                          <span className="font-bold text-black">
                            {props.program.programDetails}
                          </span>
                        </p>
                        <p className="flex gap-3 text-sm text-[#8C8C8C]">
                          Mode of Delivery{" "}
                          <span className="font-bold text-black">
                            {props.program.deliveryMode}
                          </span>
                        </p>
                        <p className="flex gap-3 text-sm text-[#8C8C8C]">
                          Program Duration{" "}
                          <span className="font-bold text-black">
                            {props.program.durationOfSupport}
                          </span>
                        </p>
                        <p className="flex gap-3 text-sm text-[#8C8C8C]">
                          Care Services{" "}
                          <span className="font-bold text-black">
                            {props.program.nonMonetarySupport.join(", ")}
                          </span>
                        </p>
                      </div>

                      <div className="sm:flex-1 flex flex-col gap-3">
                        <p className="flex gap-3 text-sm text-[#8C8C8C]">
                          Networking Opportunities{" "}
                          <span className="font-bold text-black">
                            {props.program.networkingOpportunities}
                          </span>
                        </p>
                        <p className="flex gap-3 text-sm text-[#8C8C8C]">
                          Application Process{" "}
                          <span className="font-bold text-black">
                            {props.program.applicationProcess}
                          </span>
                        </p>
                         <p className="flex gap-3 text-sm text-[#8C8C8C]">
                          Languages Supported{" "}
                          <span className="font-bold text-black">
                            {props.program.languagesSupported.join(", ")}
                          </span>
                        </p>
                        <p className="flex gap-3 text-sm text-[#8C8C8C]">
                          Impact Metrics{" "}
                          <span className="font-bold text-black">
                            {props.program.impactMetrics}
                          </span>
                        </p>
                      </div>
                    </section>
                    <section>
                      <h3 className="font-semibold mt-5 text-lg">Requirements</h3>
                      <ul className="pl-4 list-disc">
                        {props.program.requirements.businessPlan && (
                          <li>Should have a Business Plan.</li>
                        )}
                        {props.program.requirements.pitchDeck && (
                          <li>Well prepared Pitch Deck.</li>
                        )}
                        <li>
                          Should be{" "}
                          {props.program.requirements.entrepreneurialStage}.
                        </li>
                        <li>
                          Business should be registered in{" "}
                          {props.program.requirements.geographicEligibility}.
                        </li>
                        <li>
                          Business should be making{" "}
                          {props.program.requirements.revenueCap} in revenue.
                        </li>
                      </ul>
                    </section>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
