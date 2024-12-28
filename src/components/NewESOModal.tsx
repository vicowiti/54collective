"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaPlus } from "react-icons/fa6";
import { PiSpinner } from "react-icons/pi";
import axios from "axios";

export default function NewESOModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const companyName = form.company.value;
    const website = form.link.value;
    const supportType = form.supportType.value;
    const esoType = form.type.value;

    console.log(esoType, companyName, website, supportType);

    try {
      setLoading(true);
      await axios.post("/api/eso/addEso", {
        esoType,
        companyName,
        website,
        supportType,
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
        <FaPlus /> Add ESO
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
                      <h1 className="font-bold text-center text-2xl">
                        Add ESO
                      </h1>
                    </header>

                    <section>
                      <article className="grid sm:grid-cols-2 gap-10 grid-cols-1">
                        <div className="flex flex-col gap-1 my-2">
                          <label htmlFor="date" className="font-semibold">
                            Company Name
                          </label>
                          <input
                            name="company"
                            type="text"
                            required
                            placeholder="Event Name"
                            className="p-2.5 border outline-none  shadow rounded-md bg-[#f6f9f8]"
                          />
                        </div>

                        <div className="flex flex-col gap-1 my-2">
                          <label htmlFor="type" className="font-semibold">
                            ESO Type
                          </label>
                          <select
                            name="type"
                            required
                            className="p-2.5 border outline-none  shadow rounded-md bg-[#f6f9f8]"
                          >
                            <option value="">ESO Type</option>
                            <option value="Incubator">Incubator</option>
                            <option value="Accelerator">Accelerator</option>
                          </select>
                        </div>
                      </article>

                      <div className="flex flex-col gap-1 my-2">
                        <label htmlFor="location" className="font-semibold">
                          Support Type
                        </label>
                        <select
                          name="supportType"
                          required
                          className="p-2.5 border outline-none  shadow rounded-md bg-[#f6f9f8]"
                        >
                          <option value="">Support Type</option>
                          <option value="Training">Training</option>
                          <option value="MentorShip">MentorShip</option>
                          <option value="Funding">Training</option>
                        </select>
                      </div>
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
