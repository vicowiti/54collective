"use client";
import { useUserData } from "../hooks/useUserData";
import NewEventModal from "@/components/NewEventModal";
import EventListing from "@/components/EventListing";

const events = [
  {
    Event: "Africa Agri Expo",
    Location: "Nairobi, Kenya",
    Date: "Feb 19-20, 2025",
    Time: "9:00 AM - 5:00 PM",
    Link: "https://africa-agriexpo.com/index.html",
    Image: "/eventsbanner.jpg",
  },
  {
    Event: "Ghana AI Summit and Awards",
    Location: "Accra, Ghana",
    Date: "Mar 27, 2025",
    Time: "9:00 AM - 5:00 PM",
    Link: "https://www.artificialintelligenceghana.com/",
    Image: "/eventsbanner.jpg",
  },
  {
    Event: "SMEFest 2025 – Towards A Trillion Dollar SME Economy",
    Location: "Lagos, Nigeria",
    Date: "18-Jan-25",
    Time: "9:00 AM - 5:00 PM",
    Link: "https://vc4a.com/jasper-sme-hub/smefest2025-towards-a-trillion-dollar-sme-economy/",
    Image: "/eventsbanner.jpg",
  },
  {
    Event: "Africa Business Forum 2025",
    Location: "Addis Ababa, Ethiopia",
    Date: "17-Feb-25",
    Time: "9:00 AM - 5:00 PM",
    Link: "https://www.uneca.org/eca-events/africa-business-forum-2025",
    Image: "/eventsbanner.jpg",
  },
  {
    Event: "SME SA Funding Summit 2025",
    Location: "Johannesburg, South Africa",
    Date: "12-Jun-25",
    Time: "8:00 AM - 5:00 PM",
    Link: "https://smesouthafrica.co.za/event/sme-sa-funding-summit-2025/",
    Image: "/eventsbanner.jpg",
  },
  {
    Event:
      "Climate Tech Founder Wellbeing: Cultivating Resilience and Balance to Thrive",
    Location: "Virtual (Zoom)",
    Date: "20-Mar-25",
    Time: "4:00 PM - 5:30 PM",
    Link: "https://lu.ma/lm3dhsoe?tk=MLly9L",
    Image: "/eventsbanner.jpg",
  },
  {
    Event: "Africa CEO Forum 2025",
    Location: "Abidjan, Côte d'Ivoire",
    Date: "May 12-13, 2025",
    Time: "9:00 AM - 5:00 PM",
    Link: "https://www.theafricaceoforum.com/en/",
    Image: "/eventsbanner.jpg",
  },
  {
    Event: "GITEX AFRICA 2025",
    Location: "Marrakech, Morocco",
    Date: "April 14-16, 2025",
    Time: "10:00 AM - 6:00 PM",
    Link: "https://www.gitexafrica.com/",
    Image: "/eventsbanner.jpg",
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
