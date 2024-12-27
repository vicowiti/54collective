"use client";
import { useUserData } from "../hooks/useUserData";
import NewEventModal from "@/components/NewEventModal";
import { useEffect } from "react";
import EventListing from "@/components/EventListing";

const Events = () => {
  const { user } = useUserData(); 

  useEffect(() => {

    

  },[])



  return (
    <div className="p-4 sm:p-10">
      <div className="flex justify-between items-center width-full mb-3">
        <h1 className="font-bold text-3xl mb-5">Events</h1>
        {user?.isAdmin && <NewEventModal />}
      </div>

      <EventListing/>
    </div>
  );
};

export default Events;
