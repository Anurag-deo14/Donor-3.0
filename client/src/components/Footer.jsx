import React from "react";

import logo from "../../images/logod.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Donate</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Our Mission</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">The Need</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Countries</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and become a part of community to change the world</p>
      <p className="text-white text-sm text-center font-medium mt-2">anuragjee2020@gmail.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">copyright @anurag&aniket</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;