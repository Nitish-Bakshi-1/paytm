import React from "react";

const BalanceComponent = ({ balance }) => {
  return (
    <div className="w-[100%] py-5">
      <div className="flex justify-start ">
        <div className="font-semibold">Your balance</div>
        <div className="ml-4 ">Rs {balance}</div>
      </div>
    </div>
  );
};

export default BalanceComponent;
