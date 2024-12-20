import React from "react";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

const Signin = () => {
  return (
    <div className="w-[100%] h-screen flex justify-center items-center">
      <div className="rounded w-[50%] h-[70%] gap-4 flex flex-col justify-center items-center bg-slate-400 text-white">
        <Heading label="Signin" />
        <Subheading label="signin with your email" />
        <InputBox label="email" placeholder={"email"} />
        <InputBox label="password" placeholder={"password"} />
        <Button label="signup" />
        <BottomWarning
          label={"Don't have an account?"}
          buttonText={"Signup"}
          to={"/signup"}
        />
      </div>
    </div>
  );
};

export default Signin;
