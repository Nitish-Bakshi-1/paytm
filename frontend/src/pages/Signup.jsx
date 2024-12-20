import React from "react";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

const Signup = () => {
  return (
    <div className="w-[100%] h-screen flex justify-center items-center">
      <div className="rounded w-[50%] h-[90%] gap-4 flex flex-col justify-center items-center bg-slate-400 text-white">
        <Heading label="Signup" />
        <Subheading label="signup with your email" />
        <InputBox label="email" placeholder={"email"} />
        <InputBox label="firstname" placeholder={"firstname"} />
        <InputBox label="lastname" placeholder={"lastname"} />
        <InputBox label="password" placeholder={"password"} />
        <Button label="signup" />
        <BottomWarning
          label={"Already have an account?"}
          buttonText={"Signin"}
          to={"/signin"}
        />
      </div>
    </div>
  );
};

export default Signup;
