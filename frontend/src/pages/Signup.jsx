import React, { useState } from "react";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import axios from "axios";

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-[100%] h-screen flex justify-center items-center">
      <div className="rounded w-[50%] h-[90%] gap-4 flex flex-col justify-center items-center bg-slate-400 text-white">
        <Heading label="Signup" />
        <Subheading label="signup with your email" />
        <InputBox
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          label="email"
          placeholder={"email"}
        />
        <InputBox
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          label="firstname"
          placeholder={"firstname"}
        />
        <InputBox
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          label="lastname"
          placeholder={"lastname"}
        />
        <InputBox
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          label="password"
          placeholder={"password"}
        />
        <Button
          onClick={() => {
            axios.post("http://localhost:3000/api/v1/user/signup", {
              username: email,
              firstName: firstname,
              lastName: lastname,
              password,
            });
          }}
          label="signup"
        />
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
