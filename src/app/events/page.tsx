"use client";
import { useUserData } from "../hooks/useUserData";
import NewEventModal from "@/components/NewEventModal";
import EventListing from "@/components/EventListing";

const events = [
  {
    Event: "SMEFest 2025 – Towards A Trillion Dollar SME Economy",
    Location: "Lagos, Nigeria",
    Date: "18-Jan-25",
    Time: "9:00 AM - 5:00 PM",
    Link: "https://vc4a.com/jasper-sme-hub/smefest2025-towards-a-trillion-dollar-sme-economy/",
    Image: "/event1.png",
  },
  {
    Event: "Africa Business Forum 2025",
    Location: "Addis Ababa, Ethiopia",
    Date: "17-Feb-25",
    Time: "9:00 AM - 5:00 PM",
    Link: "https://www.uneca.org/eca-events/africa-business-forum-2025",
    Image: "/event2.jpg",
  },
  {
    Event: "SME SA Funding Summit 2025",
    Location: "Johannesburg, South Africa",
    Date: "12-Jun-25",
    Time: "8:00 AM - 5:00 PM",
    Link: "https://smesouthafrica.co.za/event/sme-sa-funding-summit-2025/",
    Image: "/event3.webp",
  },
  {
    Event:
      "Climate Tech Founder Wellbeing: Cultivating Resilience and Balance to Thrive",
    Location: "Virtual (Zoom)",
    Date: "20-Mar-25",
    Time: "4:00 PM - 5:30 PM",
    Link: "https://lu.ma/lm3dhsoe?tk=MLly9L",
    Image: "/event4.avif",
  },
  {
    Event: "Africa CEO Forum 2025",
    Location: "Abidjan, Côte d'Ivoire",
    Date: "May 12-13, 2025",
    Time: "9:00 AM - 5:00 PM",
    Link: "https://www.theafricaceoforum.com/en/",
    Image: "/event5.png",
  },
  {
    Event: "GITEX AFRICA 2025",
    Location: "Marrakech, Morocco",
    Date: "April 14-16, 2025",
    Time: "10:00 AM - 6:00 PM",
    Link: "https://www.gitexafrica.com/",
    Image: "/event6.png",
  },
];

const Events = () => {
  const { user } = useUserData();

  return (
    <div className="p-4 sm:p-10">
      <div className="flex justify-between items-center width-full mb-3">
        <h1 className="font-bold text-3xl mb-5">Events</h1>
        {user?.isAdmin && <NewEventModal />}
      </div>

      <EventListing events={events} />
    </div>
  );
};

export default Events;
