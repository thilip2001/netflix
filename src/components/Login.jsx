import React from "react";
import Header from "../Header";
import { NETFLIX_BACKGROUND_IMG } from "./utils/consts";

const Login = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <img
        src={NETFLIX_BACKGROUND_IMG}
        alt="background img"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Header and Content */}
      <div className="relative z-10">
        <Header />
      </div>
    </div>
  );
};

export default Login;
