"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaPlus } from "react-icons/fa6";
import { PiSpinner } from "react-icons/pi";
import axios from "axios";

export default function FundingOpportunityModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const companyName = form.company.value;
    const website = form.link.value;
    const region = form.region.value;
    const businessStage = form.businessStage.value;
    const amount = form.amount.value;
    const fundingType = form.fundingType.value;
    const industry = form.industry.value;

    try {
      setLoading(true);
      await axios.post("/api/funding/addFunding", {
        region,
        companyName,
        website,
        businessStage,
        fundingType,
        amount,
        industry,
      });
      setLoading(false);
      setOpen(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-[#508114] text-white flex items-center gap-2 p-2 rounded-md"
      >
        <FaPlus /> Add Funding Opportunity
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all w-[95%] sm:my-8 sm:w-full sm:max-w-5xl sm:p-6">
                  <form onSubmit={handleCreate}>
                    <header>
                      <h1 className="font-bold text-center my-3 text-2xl">
                        Add Funding Opportunity
                      </h1>
                    </header>

                    <section>
                      <article className="grid sm:grid-cols-2 gap-x-10 gap-y-5 grid-cols-1">
                        <div className="flex flex-col gap-1 my-2">
                          <label htmlFor="date" className="font-semibold">
                            Company Name
                          </label>
                          <input
                            name="company"
                            type="text"
                            required
                            placeholder="Company Name"
                            className="p-2.5 border outline-none  shadow rounded-md bg-[#f6f9f8]"
                          />
                        </div>
                        <div className="flex flex-col gap-1 my-2">
                          <label htmlFor="industry" className="font-semibold">
                            Industry
                          </label>
                          <input
                            name="industry"
                            type="text"
                            required
                            placeholder="Industry"
                            className="p-2.5 border outline-none  shadow rounded-md bg-[#f6f9f8]"
                          />
                        </div>
                      </article>

                      <article className="grid sm:grid-cols-2 gap-x-10 gap-y-5 grid-cols-1">
                        <div className="flex flex-col gap-1 my-2">
                          <label htmlFor="region" className="font-semibold">
                            Region
                          </label>
                          <input
                            name="region"
                            type="text"
                            required
                            placeholder="Target Region"
                            className="p-2.5 border outline-none  shadow rounded-md bg-[#f6f9f8]"
                          />
                        </div>

                        <div className="flex flex-col gap-1 my-2">
                          <label
                            htmlFor="businessStage"
                            className="font-semibold"
                          >
                            BusinessStage
                          </label>
                          <select
                            name="businessStage"
                            required
                            className="p-2.5 border outline-none  shadow rounded-md bg-[#f6f9f8]"
                          >
                            <option value="">Business Stage</option>
                            <option value="Idea Stage">Idea Stage</option>
                            <option value="Growth Stage">Growth Stage</option>
                            <option value="MVP Stage">MVP Stage</option>
                            <option value="Early Stage">Early Stage</option>
                            <option value="Seed Stage">Seed Stage</option>
                            <option value="Established">Established</option>
                          </select>
                        </div>
                      </article>

                      <article className="grid sm:grid-cols-2 gap-x-10 gap-y-5 grid-cols-1">
                        <div className="flex flex-col gap-1 my-2">
                          <label htmlFor="type" className="font-semibold">
                            Funding Type
                          </label>
                          <select
                            name="fundingType"
                            required
                            className="p-2.5 border outline-none  shadow rounded-md bg-[#f6f9f8]"
                          >
                            <option value="">Funding Type</option>
                            <option value="Loans">Loans</option>
                            <option value="Grants">Grants</option>
                            <option value="Equity">Equity</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1 my-2">
                          <label htmlFor="amount" className="font-semibold">
                            Amount
                          </label>
                          <input
                            name="amount"
                            type="number"
                            required
                            placeholder="Amount"
                            className="p-2.5 border outline-none  shadow rounded-md bg-[#f6f9f8]"
                          />
                        </div>
                      </article>

                      <div className="flex flex-col gap-1 my-2">
                        <label htmlFor="link" className="font-semibold">
                          Website Link
                        </label>
                        <input
                          name="link"
                          required
                          placeholder="https://...."
                          className="p-2.5 border outline-none  shadow rounded-md bg-[#f6f9f8]"
                        />
                      </div>
                    </section>
                    <div>
                      <button
                        disabled={loading}
                        type="submit"
                        className="p-3 flex items-center justify-center gap-3 my-3 text-white w-full font-semibold bg-[#64B500]"
                      >
                        {loading && (
                          <PiSpinner size={16} className="animate-spin " />
                        )}
                        Submit Event
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
