// "use client";

// interface Props {
//   events: {
//     Event: string;
//     Location: string;
//     Date: string;
//     Time: string;
//     Link: string;
//     Image: string;
//   }[];
// }

// const EventListing = ({ events }: Props) => {
//   return (
//     <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//       {events.map((event) => (
//         <article key={event.Event}>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <img
//               src={event.Image}
//               alt={event.Event}
//               className="w-full sm:w-1/2"
//             />
//             <div className="flex flex-col gap-2">
//               <h2 className="font-bold text-2xl">{event.Event}</h2>
//               <p className="text-gray-500">{event.Location}</p>
//               <p className="text-gray-500">{event.Date}</p>
//               <p className="text-gray-500">{event.Time}</p>
//               <a href={event.Link} className="text-blue-500 hover:underline">
//                 Learn More
//               </a>
//             </div>
//           </div>
//         </article>
//       ))}
//     </section>
//   );
// };

// export default EventListing;

"use client";

interface Props {
  events: {
    Event: string;
    Location: string;
    Date: string;
    Time: string;
    Link: string;
    Image: string;
  }[];
}

const EventListing = ({ events }: Props) => {
  return (
    <section className="grid grid-cols-1  sm:grid-cols-2 gap-6">
      {events.map((event) => (
        <article
          key={event.Event}
          className="bg-white shadow-lg rounded-xl overflow-hidden relative"
        >
          {/* Image Section */}
          <div className="relative">
            <img
              src={event.Image}
              alt={event.Event}
              className="w-full h-48 object-cover"
            />
            {/* Circular Date Badge */}
            <div className="absolute top-4 right-4 bg-[#65b602] text-white flex-col text-center rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
              <span>
                {new Date(event.Date).toLocaleString("default", {
                  day: "2-digit",
                })}
              </span>
              <span className="block text-[10px] uppercase">
                {new Date(event.Date).toLocaleString("default", {
                  month: "short",
                })}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 mt-3">
            <h2 className="font-bold text-lg sm:text-xl text-gray-800">
              {event.Event}
            </h2>
            <p className="text-gray-500">{event.Location}</p>
            <p className="text-gray-500 mt-1">
              {event.Date} @ {event.Time}
            </p>
            <a
              target="_blank"
              href={event.Link}
              className="inline-block mt-4 bg-[#65b602] text-white text-sm px-4 py-2 rounded-full shadow hover:bg-green-600"
            >
              View More →
            </a>
          </div>
        </article>
      ))}
    </section>
  );
};

export default EventListing;
