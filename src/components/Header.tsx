import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="flex items-center justify-between">
          <NavigationMenu className="flex items-center space-x-4">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <IconLogo className="h-8 w-8" />
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <IconHousing className="h-6 w-6" />
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <IconCommunities className="h-6 w-6" />
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <IconServices className="h-6 w-6" />
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <IconForsale className="h-6 w-6" />
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <IconEvents className="h-6 w-6" />
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <IconJobs className="h-6 w-6" />
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <IconTranslate className="h-6 w-6" />
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center space-x-2">
            <Button variant="default">Create Post</Button>
            <Button variant="ghost">Log In</Button>
            <Button variant="default">Sign up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
