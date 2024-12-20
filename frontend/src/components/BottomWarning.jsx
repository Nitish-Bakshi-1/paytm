import React from "react";
import { Link } from "react-router-dom";

const BottomWarning = ({ label, buttonText, to }) => {
  return (
    <div className="flex ">
      <div className="text-lg">{label}</div>
      <Link to={to}>
        <div className="underline text-lg ml-1">{buttonText}</div>
      </Link>
    </div>
  );
};

export default BottomWarning;
