// "use client";
// import { Fragment, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";

// import { FaLocationDot } from "react-icons/fa6";
// import { FundingOrganization } from "./FundingTable";

// interface Props {
//   program: FundingOrganization;
// }

// export default function FundingModal(props: Props) {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         className="text-[#80C22F] whitespace-nowrap border border-[#80C22F] p-2 text-xs sm:p-3 rounded-md"
//       >
//         View Details
//       </button>
//       <Transition.Root show={open} as={Fragment}>
//         <Dialog as="div" className="relative z-10" onClose={setOpen}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//           </Transition.Child>

//           <div className="fixed inset-0 z-10 overflow-y-auto">
//             <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//                 enterTo="opacity-100 translate-y-0 sm:scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//                 leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//               >
//                 <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-7xl sm:p-6">
//                   <div>
//                     <header className="flex flex-col sm:flex-row justify-between items-center">
//                       <div>
//                         <h2 className="font-bold text-xl my-2">
//                           {props.program.companyName}
//                         </h2>
//                         <p className="flex items-center gap-3 text-[#4F4F4F]">
//                           <FaLocationDot /> {props.program.countryRegionFocus}
//                         </p>
//                         <button className="bg-[#FDF9D6] px-2 py-1 text-[#E5CF00] text-xs my-2 rounded-md">
//                           {props.program.businessStage}
//                         </button>
//                       </div>
//                       <div>
//                         <button className="bg-[#64B500] text-white px-3 text-xs py-2 rounded-md">
//                           Apply
//                         </button>
//                       </div>
//                     </header>

//                     <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
//                       <div className="flex flex-col gap-3">
//                         <p className="flex gap-3 text-sm text-[#8C8C8C]">
//                           Industry Focus{" "}
//                           <span className="font-bold text-black">
//                             {props.program.industryFocus}
//                           </span>
//                         </p>
//                         <p className="flex gap-3 text-sm text-[#8C8C8C]">
//                           Funding Type{" "}
//                           <span className="font-bold text-black">
//                             {props.program.fundingType}
//                           </span>
//                         </p>
//                         <p className="flex gap-3 text-sm text-[#8C8C8C]">
//                           Website Link{" "}
//                           <span className="font-bold text-black">
//                             <a
//                               href={props.program.website}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                             >
//                               {props.program.website}
//                             </a>
//                           </span>
//                         </p>
//                         <p className="flex gap-3 text-sm text-[#8C8C8C]">
//                           Programs Offered{" "}
//                           <span className="font-bold text-black">
//                             {props.program.programDetails}
//                           </span>
//                         </p>
//                         <p className="flex gap-3 text-sm text-[#8C8C8C]">
//                           Application Deadline{" "}
//                           <span className="font-bold text-black">
//                             {props.program.applicationDeadline}
//                           </span>
//                         </p>
//                         <p className="flex gap-3 text-sm text-[#8C8C8C]">
//                           Duration of Support{" "}
//                           <span className="font-bold text-black">
//                             {props.program.durationOfSupport}
//                           </span>
//                         </p>
//                         <p className="flex gap-3 text-sm text-[#8C8C8C]">
//                           Non-Monetary Support{" "}
//                           <span className="font-bold text-black">
//                             {props.program.nonMonetarySupport}
//                           </span>
//                         </p>
//                       </div>

//                       <div className="flex flex-col gap-3">
//                         <p className="flex gap-3 text-sm text-[#8C8C8C]">
//                           Application Frequency{" "}
//                           <span className="font-bold text-black">
//                             {props.program.applicationFrequency}
//                           </span>
//                         </p>
//                         <p className="flex gap-3 text-sm text-[#8C8C8C]">
//                           Eligibility Criteria{" "}
//                           <span className="font-bold text-black">
//                             {props.program.eligibilityCriteria}
//                           </span>
//                         </p>
//                         <p className="flex gap-3 text-sm text-[#8C8C8C]">
//                           Funding Amount Range{" "}
//                           <span className="font-bold text-black">
//                             {props.program.fundingAmountRange}
//                           </span>
//                         </p>
//                         <p className="flex gap-3 text-sm text-[#8C8C8C]">
//                           Currency of Funding{" "}
//                           <span className="font-bold text-black">
//                             {props.program.currencyOfFunding}
//                           </span>
//                         </p>
//                       </div>
//                     </section>

//                     <section>
//                       <h3 className="font-semibold mt-5 text-lg">
//                         Requirements
//                       </h3>
//                       <ul className="pl-4 list-disc">
//                         {props.program.requiredDocuments && (
//                           <li>
//                             Required Documents:{" "}
//                             {props.program.requiredDocuments}
//                           </li>
//                         )}
//                         {props.program.restrictionsExclusions && (
//                           <li>
//                             Restrictions & Exclusions:{" "}
//                             {props.program.restrictionsExclusions}
//                           </li>
//                         )}
//                       </ul>
//                     </section>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition.Root>
//     </>
//   );
// }

"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaLocationDot } from "react-icons/fa6";
import { FundingOrganization } from "./FundingTable";

interface Props {
  program: FundingOrganization;
}

export default function FundingModal({ program }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-[#80C22F] border border-[#80C22F] px-3 py-2 text-xs rounded-md"
      >
        View Details
      </button>
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
                <Dialog.Panel className="relative w-full max-w-2xl transform rounded-lg bg-white p-6 text-left shadow-xl transition-all">
                  {/* Header */}
                  <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                      <h2 className="text-xl font-bold mb-2">
                        {program.companyName}
                      </h2>
                      <p className="flex items-center text-sm text-[#4F4F4F]">
                        <FaLocationDot className="mr-2" />
                        {program.countryRegionFocus}
                      </p>
                      <button className="mt-2 bg-[#FDF9D6] text-[#E5CF00] text-xs px-2 py-1 rounded-md">
                        {program.businessStage}
                      </button>
                    </div>
                    <button className="mt-4 sm:mt-0 bg-[#64B500] text-white text-xs px-4 py-2 rounded-md">
                      Apply
                    </button>
                  </header>

                  {/* Content */}
                  <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-3">
                      <InfoRow
                        label="Industry Focus"
                        value={program.industryFocus}
                      />
                      <InfoRow
                        label="Funding Type"
                        value={program.fundingType}
                      />
                      <InfoRow
                        label="Website Link"
                        value={
                          <a
                            href={program.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            {program.website}
                          </a>
                        }
                      />
                      <InfoRow
                        label="Programs Offered"
                        value={program.programDetails}
                      />
                      <InfoRow
                        label="Application Deadline"
                        value={program.applicationDeadline}
                      />
                      <InfoRow
                        label="Duration of Support"
                        value={program.durationOfSupport}
                      />
                      <InfoRow
                        label="Non-Monetary Support"
                        value={program.nonMonetarySupport}
                      />
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-3">
                      <InfoRow
                        label="Application Frequency"
                        value={program.applicationFrequency}
                      />
                      <InfoRow
                        label="Eligibility Criteria"
                        value={program.eligibilityCriteria}
                      />
                      <InfoRow
                        label="Funding Amount Range"
                        value={program.fundingAmountRange}
                      />
                      <InfoRow
                        label="Currency of Funding"
                        value={program.currencyOfFunding}
                      />
                    </div>
                  </section>

                  {/* Requirements Section */}
                  <section className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-[#4F4F4F]">
                      {program.requiredDocuments && (
                        <li>
                          <strong>Required Documents:</strong>{" "}
                          {program.requiredDocuments}
                        </li>
                      )}
                      {program.restrictionsExclusions && (
                        <li>
                          <strong>Restrictions & Exclusions:</strong>{" "}
                          {program.restrictionsExclusions}
                        </li>
                      )}
                    </ul>
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

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <p className="text-sm text-[#8C8C8C]">
      {label}: <span className="font-bold text-black">{value}</span>
    </p>
  );
}
