"use client";
import React, { useState } from "react";
import CustomLink from "./ui/link";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import BasicCard from "./card/BasicCard";

type Props = {};

const ForSale = (props: Props) => {
  const [active, setActive] = useState<number>(0);
  return (
    <section className="mx-auto max-w-7xl px-6 py-3">
      <div className="flex justify-between py-8">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          For Sale
        </h2>
        <CustomLink>View All</CustomLink>
      </div>

      <div className="grid h-72 grid-cols-5">
        <div className="col-span-1">
          <ScrollArea className="h-72">
            <div className=" flex flex-col space-y-2">
              {new Array(10).fill(1).map((category, index) => (
                <Button
                  key={index}
                  variant={active === index ? "default" : "secondary"}
                  className="py-6"
                >
                  12
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
        <ScrollArea className="col-span-4 h-72 w-full ">
          <div className="col-span-4 grid max-h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <BasicCard />
            <BasicCard />
            <BasicCard />
            <BasicCard />
            <BasicCard />
            <BasicCard />
            <BasicCard />
            <BasicCard />
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default ForSale;
