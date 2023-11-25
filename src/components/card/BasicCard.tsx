import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import CustomLink from "../ui/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Bookmark, Star } from "lucide-react";

type Props = {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  price?: string;
  id?: string;
  bookmark?: boolean;
};

const BasicCard = ({
  className,
  title,
  description,
  image,
  price,
  id,
  bookmark = false,
}: Props) => {
  return (
    <Card
      className={cn(
        "col-span-1 mx-auto h-64 w-48  border-none shadow-none ",
        className,
      )}
    >
      <CardHeader className="relative h-48 w-48 rounded-lg bg-[url('https://images.unsplash.com/photo-1434389677669-e08b4cac3105')] bg-cover bg-center bg-no-repeat object-cover">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 cursor-pointer bg-transparent p-0 text-black hover:bg-blue-50"
        >
          <Bookmark className="h-4 w-4" />
        </Button>
        <Badge variant={"secondary"} className="absolute bottom-2 right-2">
          $12.12
        </Badge>
      </CardHeader>
      <CardContent className="border-none px-0 pt-2">
        <CustomLink className="cursor-pointer text-lg font-medium text-black hover:text-blue-800">
          test item link
        </CustomLink>
        <p className="text-md text-gray-600">category</p>
      </CardContent>
    </Card>
  );
};

export default BasicCard;
