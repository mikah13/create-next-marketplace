import React from "react";
import SectionWrapper from "./SectionWrapper";
import CustomLink from "./ui/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { api } from "@/trpc/server";

const Forums = async () => {
  const allForums = await api.category.getCategoryByTopic.query({
    topic: "Discussion Forums",
  });
  // console.log(allForums);
  return (
    <SectionWrapper>
      <div className="flex justify-between py-8">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Communities
        </h2>
        <CustomLink>View All</CustomLink>
      </div>
      <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {allForums &&
          allForums.map((forum) => (
            <Card key={forum.id} className="col-span-1">
              <CardHeader className="flex flex-row items-center space-x-2">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />

                <CardTitle>{forum.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
      </div>
    </SectionWrapper>
  );
};

export default Forums;
