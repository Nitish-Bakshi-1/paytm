import React from "react";

const Appbar = () => {
  return (
    <div className="w-[100%] p-2 border-t-black border-t-4 border-b-2">
      <div className="flex justify-between items-center ">
        <div className="text-lg">PayTM App</div>
        <div className="text-lg flex items-center">
          Hello{" "}
          <div className="ml-2 rounded-full text-2xl w-8 h-8 text-center bg-slate-300">
            U
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
