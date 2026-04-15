import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { currentUser } from "@clerk/nextjs/server";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiUserLine } from "@remixicon/react";
import SignOutLink from "./SignOutLink";
import Link from "next/link";

export default async function UserIconDropdown() {
  const user = await currentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-3 px-3 py-2 rounded-full hover:bg-muted transition"
        >
          <Avatar className="h-9 w-9 border border-muted">
            <AvatarImage
              src={user?.imageUrl}
              alt={user?.firstName || "user image"}
            />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {user?.firstName?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-start leading-tight">
            <span className="text-xs text-muted-foreground">Welcome</span>
            <span className="text-sm font-medium capitalize">
              {user?.firstName}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-101">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/profile" className="flex items-center gap-2">
              <RiUserLine />
              Profile
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOutLink />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
