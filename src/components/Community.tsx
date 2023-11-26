import React from "react";
import SectionWrapper from "./SectionWrapper";
import CustomLink from "./ui/link";

type Props = {};

const Community = (props: Props) => {
  return (
    <SectionWrapper>
      <div className="flex justify-between py-8">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Communities
        </h2>
        <CustomLink>View All</CustomLink>
      </div>{" "}
    </SectionWrapper>
  );
};

export default Community;
