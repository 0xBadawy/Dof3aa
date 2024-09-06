import React from "react";
import { useAppSetting } from "../Context/AppSettingContext";
import HeroSection from "../Sections/HeroSection";
import DiscoverCoursesSection from "../Sections/DiscoverCoursesSection";

const Landing = () => {
  return (
    <>
      <div>
        <div className="bg-gradient-to-br h-[2000px]  from-[#f9fafc] via-[#d1d9e6] to-[#f9fafc] pt-20">
          <HeroSection />
          <DiscoverCoursesSection />
        </div>
      </div>
    </>
  );
};

export default Landing;
