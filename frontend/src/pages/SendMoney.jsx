import React from "react";

const SendMoney = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <div className="w-[30%] h-[40%] flex flex-col justify-center gap-4 items-center shadow-2xl">
        <div className=" font-bold text-3xl">Send Money</div>
        <div className="flex w-[80%]">
          <div className="w-7 h-7 bg-green-500 text-white rounded-full text-xl text-center mr-2">
            A
          </div>
          <div>Friend's Name</div>
        </div>
        <div className="w-[80%]">
          <div>Amount (in Rs)</div>
          <input
            type="number"
            placeholder={"amount"}
            className="border-2 p-2 my-2 w-[100%]"
          />
        </div>
        <div className="w-[100%] ">
          <button className="bg-green-500 ml-[10%] w-[80%] h-10 text-white">
            Initaite Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
