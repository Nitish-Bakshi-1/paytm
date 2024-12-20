import React from "react";

const UsersComponent = ({ firstname }) => {
  return (
    <div className="w-[100%] ">
      <div>
        <div>Users</div>
        <div>
          <input
            type="text"
            placeholder="Search users..."
            className="w-[100%] border-2 rounded p-1 m-2"
          />
        </div>
        <div className="flex justify-between mt-4 mx-2">
          <div className="flex items-center">
            <div className="w-8 h-8 text-2xl bg-slate-300 rounded-full text-center">
              H
            </div>
            <div className="ml-2 text-lg">{firstname}</div>
          </div>
          <button className="bg-slate-700 text-white rounded p-1 text-md">
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersComponent;
