"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { PiSpinner } from "react-icons/pi";

interface EventItem {
  _id: string;
  description: string;
  date: string;
  location: string;
  name: string;
  website?: string;
  time?: string;
}

const EventListing = () => {
  const [data, setData] = useState<EventItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get("/api/events/getEvents");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Error loading events. Please try again later.");
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <p className="text-xl text-center flex gap-5 justify-center items-center">
        <PiSpinner className="animate-spin" /> Loading Events...
      </p>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      {data?.map((item) => (
        <article
          key={item._id}
          className="flex flex-col sm:flex-row gap-10 mb-10"
        >
          <div className="flex flex-col items-center gap-2 p-5 bg-white shadow rounded-xl self-start">
            <h2 className="font-bold text-xl">{item.date.split(" ")[0]}</h2>
            <p className="text-[#E5CF00] font-bold text-xl">
              {item.date.split(" ")[1]}
            </p>
          </div>
          <div>
            <Image
              height={50}
              width={50}
              src={`/event-banner.png`}
              alt={item.name}
              className="h-full w-[300px] object-cover rounded-md"
            />
          </div>
          <div>
            <section>
              <h3 className="text-xl font-bold mb-3">{item.name}</h3>
              <p className="flex items-center gap-3 text-[#E5CF00] sm:text-lg mb-2">
                <MdOutlineCalendarMonth color="#2A2A27" size={22} />
                {item.date}
              </p>
              <p className="flex items-center gap-3 text-[#E5CF00] sm:text-lg mb-2">
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
  );
};

export default EventListing;
