import React from "react";
import { NETFLIX_LOGO } from "./components/utils/consts";

const Header = () => {
  return (
    <div className="absolute py-6 px-12 my-0 mx-[120px]">
      <img height="50" width="150" alt="netflix" src={NETFLIX_LOGO} />
    </div>
  );
};

export default Header;
