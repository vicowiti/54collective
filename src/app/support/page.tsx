"use client";
import NewESOModal from "@/components/NewESOModal";
import { useUserData } from "../hooks/useUserData";
import EsoTable from "@/components/EsoTable";

const Support = () => {
  const { user } = useUserData();
  return (
    <div className="p-4">
      <div className="flex justify-end my-2 items-center">
        {user?.isAdmin && <NewESOModal />}
      </div>
      <EsoTable />
    </div>
  );
};

export default Support;
