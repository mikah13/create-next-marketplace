import React from "react";

import { Button } from "./ui/button";
import { getServerAuthSession } from "@/server/auth";
import { Plus } from "lucide-react";

const Header = async () => {
  const session = await getServerAuthSession();
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="flex items-center justify-between">
          <div>Logo</div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Create Post
                      </Button>
                      
            {session?.user ? (
              <Button variant="ghost">Log In</Button>
            ) : (
              <Button variant="default">Sign up</Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
