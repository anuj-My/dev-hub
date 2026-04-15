"use client";
import { SignOutButton } from "@clerk/nextjs";
import { RiLogoutBoxLine } from "@remixicon/react";
import Link from "next/link";
import { toast } from "sonner";

const SignOutLink = () => {
  const handleLogOut = () => {
    toast("Logout successfully.");
  };
  return (
    <SignOutButton>
      <Link href="/" onClick={handleLogOut} className="flex items-center gap-2">
        <RiLogoutBoxLine />
        Log Out
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
