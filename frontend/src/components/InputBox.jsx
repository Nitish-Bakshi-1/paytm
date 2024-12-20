import React from "react";

const InputBox = ({ label, placeholder, onchange }) => {
  return (
    <div className="w-[70%]">
      <div className="text-2xl font-medium">{label}</div>
      <input
        className="border-2 w-[100%] h-8 p-5 rounded text-black"
        type="text"
        placeholder={placeholder}
        onChange={onchange}
      />
    </div>
  );
};

export default InputBox;
