import { eventData } from "@/data/eventData";
import Image from "next/image";
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Events = () => {
  return (
    <div className="p-4 sm:p-10">
      <h1 className="font-bold text-3xl mb-5">Events</h1>

      <section>
        {eventData.map((item) => (
          <article key={item.title} className="flex flex-col sm:flex-row gap-10 mb-10">
            <div className="flex flex-col items-center gap-2 p-5 bg-white shadow rounded-xl self-start">
              <h2 className="font-bold text-3xl">{item.date.split(" ")[0]}</h2>
              <p className="text-[#E5CF00] font-bold text-xl">
                {item.date.split(" ")[1]}
              </p>
            </div>
            <div>
              <Image
                height={50}
                width={50}
                src={item.image}
                alt={item.title}
                className="h-full w-[300px] object-cover rounded-md"
              />
            </div>
            <div>
              <section>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="flex items-center gap-3 text-[#E5CF00] sm:text-lg mb-2">
                  <MdOutlineCalendarMonth color="#2A2A27" size={22} />
                  {item.datetime}
                </p>
                <p className="flex items-center gap-3 text-[#E5CF00] smtext-lg mb-2">
                  <FaLocationDot color="#2A2A27" size={22} />
                  {item.location}
                </p>

                <p className="text-sm sm:text-lg my-3">{item.description}</p>
              </section>
              <section className="flex items-center gap-3">
                <button className="bg-[#80C22F] text-white p-3 sm:font-semibold rounded-lg">
                  Add to Calendar
                </button>
                <button className="text-[#80C22F] border border-[#80C22F] flex p-3 items-center gap-2 sm:font-semibold rounded-lg">
                  See More <FaArrowRightLong />
                </button>
              </section>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Events;
