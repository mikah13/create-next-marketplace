import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { getServerAuthSession } from "@/server/auth";
import { signIn, signOut } from "next-auth/react";
import { NAV_LINKS } from "@/lib/constant";

export async function Sidebar() {
  const session = await getServerAuthSession();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <Link href="/">
            <Image src="/logo.png" height={50} width={50} alt="Page logo" />
          </Link>
        </SheetHeader>
        <SheetDescription>
          {session && session.user ? (
            <div className="h flex w-full justify-between px-0 py-2">
              <div className="text-left">
                <p className="truncate font-bold">{session.user.name}</p>
              </div>
              <Image
                className="rounded-full"
                src={session.user.image ?? ""}
                alt="user avatar"
                objectFit="contain"
              />
            </div>
          ) : null}
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link, index) => {
              return (
                <div key={index}>
                  <Link href={link.href}>{link.label}</Link>
                  <Separator />
                </div>
              );
            })}
          </div>
          {/* <Button
            className="w-full"
            variant="secondary"
            onClick={() => (session?.user ? signOut() : signIn())}
          >
            {session?.user ? "Logout" : "Sign in"}
          </Button> */}
        </SheetDescription>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
