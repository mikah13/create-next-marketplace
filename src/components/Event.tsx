"use client";
import React from "react";
import SectionWrapper from "./SectionWrapper";
import CustomLink from "./ui/link";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import HouseCard from "./card/HouseCard";

type Props = {};

const Event = (props: Props) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <SectionWrapper>
      <div className="flex justify-between py-8">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Event Calendar
        </h2>
        <CustomLink>View All</CustomLink>
      </div>{" "}
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="col-span-1">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>

        <div className="col-span-3">
          <ScrollArea className="w-full  whitespace-nowrap rounded-md border">
            <div className="flex w-max flex-row  space-x-6 overflow-x-scroll">
              {" "}
              <HouseCard />
              <HouseCard />
              <HouseCard />
              <HouseCard />
              <HouseCard />
            </div>
          </ScrollArea>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Event;
