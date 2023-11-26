import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const SectionWrapper = ({ children, className }: Props) => {
  return (
    <section className={cn("mx-auto max-w-7xl px-10 py-3", className)}>
      {children}
    </section>
  );
};

export default SectionWrapper;
