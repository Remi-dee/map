import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div>
      <div className="flex flex-col font-inter">
        <h1 className="text-xl font-normal leading-5 text-left mt-[8px] lg:mt-[40px] dark:text-white">
          <Navbar />
        </h1>
      </div>
    </div>
  );
};

export default Header;
