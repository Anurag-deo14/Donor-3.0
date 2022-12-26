import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { DiYeoman } from "react-icons/di";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Services that we
          <br />
          continiously deliver
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        our company has been involved in projects such as providing housing, food, medical facilities etc, for the upliftment of the needy across the world.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and make sure your donation remains secure."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="No Middlemen"
          icon={<DiYeoman fontSize={21} className="text-white" />}
          subtitle="The developed the technology developed by us make sure that that your donation reaches to needy without any involvement of middlemen."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Spreading Love"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="They are spreading happiness to the needy community and truly obliged to the person who is part of this charity service."
        />
      </div>
    </div>
  </div>
);

export default Services;