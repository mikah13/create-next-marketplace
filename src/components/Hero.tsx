import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="to-indigo-400w-full bg-gradient-to-bl from-blue-300 via-purple-100  py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-4">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl">
            Find everything you need <br /> in{" "}
            <span className="text-blue-500">our marketplace</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover amazing deals and essential services in your community.
          </p>
        </div>
        <div className="flex w-full space-x-2 mt-4">
          <Input className="" placeholder="I want to find..." />
          <Button type="submit">Search</Button>
        </div>
        <div className="flex space-x-2">
          <Badge variant="default">Apartments</Badge>
          <Badge variant="default">Books</Badge>
          <Badge variant="default">UI/UX jobs</Badge>
          <Badge variant="default">Vacation</Badge>
        </div>
      </div>
    </section>
  );
};

export default Hero;
