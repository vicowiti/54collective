"use client";


import { useUserData } from "../hooks/useUserData";
import FundingOpportunityModal from "@/components/FundingOpportunityModal";
import FundingTable from "@/components/FundingTable";

const Funding = () => {
  const { user } = useUserData();
  return (
    <div className="p-4">
      {user?.isAdmin && (
        <div className="my-3 flex justify-end">
          <FundingOpportunityModal />
        </div>
      )}
      <FundingTable/>
    </div>
  );
};

export default Funding;
