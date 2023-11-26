import React from "react";
import SectionWrapper from "./SectionWrapper";
import CustomLink from "./ui/link";
import HouseCard from "./card/HouseCard";

type Props = {};

const Event = (props: Props) => {
  return (
    <SectionWrapper>
      <div className="flex justify-between py-8">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Event Calendar
        </h2>
        <CustomLink>View All</CustomLink>
      </div>{" "}
      <div className="grid grid-cols-4 gap-y-6"></div>
    </SectionWrapper>
  );
};

export default Event;
