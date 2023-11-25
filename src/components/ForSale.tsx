import React from "react";
import CustomLink from "./ui/link";

type Props = {};

const ForSale = (props: Props) => {
  return (
    <section className="container bg-white px-4 md:px-6">
      <div className="flex justify-between">
        <h2>For Sale</h2>
        <CustomLink>View All</CustomLink>
          </div>
          
          <div className="grid-cols-5">
              


          </div>
    </section>
  );
};

export default ForSale;
