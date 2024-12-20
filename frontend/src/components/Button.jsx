import React from "react";

const Button = ({ label }) => {
  return (
    <div className="w-[100%] flex justify-center">
      <button className="bg-black text-white w-[50%] p-4 mt-2 rounded">
        {label}
      </button>
    </div>
  );
};

export default Button;
