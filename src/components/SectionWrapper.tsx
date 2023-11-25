import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const SectionWrapper = ({ children, className }: Props) => {
  return (
    <div className={(cn("mx-auto max-w-7xl px-6 py-3"), className)}>
      {children}
    </div>
  );
};

export default SectionWrapper;
