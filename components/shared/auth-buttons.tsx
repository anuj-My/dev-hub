import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const AuthButtons = ({ centered = false }: { centered?: boolean }) => {
  return (
    <div
      className={`flex gap-4 items-center ${centered ? "justify-center" : "justify-end"}`}
    >
      <Button size="lg" asChild>
        <Link href="/sign-up" className="capitalize">
          Get Started
        </Link>
      </Button>
      <Button variant="outline" size="lg" asChild>
        <Link
          href="/sign-in"
          className="capitalize text-muted-foreground hover:text-primary"
        >
          Sign in
        </Link>
      </Button>
    </div>
  );
};

export default AuthButtons;
