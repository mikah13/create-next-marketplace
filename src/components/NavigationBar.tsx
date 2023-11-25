"use client";

import React from "react";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

type TLinks = {
  href: string;
  label: string;
};
const NAV_LINKS: TLinks[] = [
  {
    href: "/housing",
    label: "Housing",
  },
  {
    href: "/communities",
    label: "Communities",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/sale",
    label: "For Sale",
  },
  {
    href: "/events",
    label: "Events",
  },
  {
    href: "/jobs",
    label: "Jobs",
  },
];
const NavigationBar = () => {
  return (
    <div className="flex items-center justify-around">
      <NavigationMenu>
        <NavigationMenuList>
          {NAV_LINKS.map((link) => (
            <NavigationMenuItem key={link}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {link.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationBar;
