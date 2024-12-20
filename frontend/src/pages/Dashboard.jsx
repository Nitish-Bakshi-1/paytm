import React from "react";
import Appbar from "../components/Appbar";
import BalanceComponent from "../components/BalanceComponent";
import UsersComponent from "../components/UsersComponent";

const Dashboard = () => {
  return (
    <div className="w-[100%] h-screen pt-2">
      <div className="flex  flex-col   mx-auto w-[98%] h-[80%]">
        <Appbar />
        <BalanceComponent balance={"10,000"} />
        <UsersComponent firstname={"harkirat"} />
      </div>
    </div>
  );
};

export default Dashboard;
