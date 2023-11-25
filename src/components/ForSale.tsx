import React from "react";
import CustomLink from "./ui/link";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";

type Props = {};

const ForSale = (props: Props) => {
  return (
    <section className="container bg-white px-4 md:px-6">
      <div className="flex justify-between">
        <h2>For Sale</h2>
        <CustomLink>View All</CustomLink>
      </div>

      <div className="grid h-72 grid-cols-5">
        <div className="col-span-1">
          <ScrollArea>
            <div className="flex flex-col">
              <Button>12</Button>
              <Button>12</Button>
              <Button>12</Button>
              <Button>12</Button>
              <Button>12</Button>
            </div>
          </ScrollArea>
        </div>
        <div className="col-span-4">asdf</div>
      </div>
    </section>
  );
};

export default ForSale;
