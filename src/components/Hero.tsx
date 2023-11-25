import React from "react";
import { Button } from "./ui/button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl">
            Find everything you need <br /> in{" "}
            <span className="text-blue-500">our marketplace</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover amazing deals and essential services in your community.
          </p>
        </div>
        <div className="relative w-full max-w-sm space-y-2">
          {/* <Input className="pl-10 pr-40" placeholder="Search Craigslist" /> */}
          <Button type="submit">Search</Button>
        </div>
        <div className="mt-4 flex space-x-2">
          {/* <Badge variant="default">Apartments</Badge>
          <Badge variant="default">Books</Badge>
          <Badge variant="default">UI/UX jobs</Badge>
          <Badge variant="default">Vacation</Badge> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
