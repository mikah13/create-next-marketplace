import React from "react";

import { Button } from "./ui/button";
import { getServerAuthSession } from "@/server/auth";
import { Plus } from "lucide-react";
import { Separator } from "./ui/separator";
import NavigationBar from "./NavigationBar";
import Image from "next/image";
import { Sidebar } from "./Sidebar";
import SectionWrapper from "./SectionWrapper";

const Header = async () => {
  const session = await getServerAuthSession();
  return (
    <header className="bg-white shadow">
      <SectionWrapper>
        <div className="flex items-center justify-between">
          <div className="">
            <Image src="/logo.png" height={50} width={50} alt="Page logo" />
          </div>
          <div className="hidden items-center space-x-2 md:flex">
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Create Post
            </Button>
            <Separator orientation="vertical" className="h-10 text-sm" />
            {session?.user ? (
              <Button variant="ghost">Log In</Button>
            ) : (
              <Button variant="default">Sign up</Button>
            )}
          </div>
          <div className="block md:hidden">
            <Sidebar />
          </div>
        </div>
      </SectionWrapper>
      <NavigationBar />
    </header>
  );
};

export default Header;
