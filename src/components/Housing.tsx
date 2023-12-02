import React from "react";
import SectionWrapper from "./SectionWrapper";
import CustomLink from "./ui/link";
import HouseCard from "./card/HouseCard";

const Housing = () => {
  return (
    <SectionWrapper>
      <div className="flex justify-between py-8">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Housing
        </h2>
        <CustomLink>View All</CustomLink>
      </div>
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
    </SectionWrapper>
  );
};

export default Housing;
