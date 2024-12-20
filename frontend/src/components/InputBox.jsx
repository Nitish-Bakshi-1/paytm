import React from "react";

const InputBox = ({ label, placeholder }) => {
  return (
    <div className="w-[70%]">
      <div className="text-2xl font-medium">{label}</div>
      <input
        className="border-2 w-[100%] h-8 p-5 rounded"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBox;
