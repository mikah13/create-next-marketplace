import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  href?: string;
};

const CustomLink = ({ href, className, children }: Props) => {
  return (
    <Link
      href={href ?? "/"}
      className={cn(
        "text-gray-700 transition hover:opacity-75 dark:text-gray-200",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
