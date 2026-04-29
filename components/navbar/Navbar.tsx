import Link from "next/link";
import Container from "../global/Container";
import AuthButtons from "../shared/auth-buttons";
import { Show } from "@clerk/nextjs";
import UserIconDropdown from "./UserIconDropdown";
import { ThemeToggle } from "../shared/ThemeToggle";

const Navbar = async () => {
  return (
    <div className="sticky top-0 w-full z-50 border-b bg-background/70 backdrop-blur">
      <Container>
        <nav className="flex items-center justify-between py-3">
          <Link href="/" className="text-xl font-bold">
            Dev<span className="text-primary">Hub</span>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Show when="signed-in">
              <UserIconDropdown />
            </Show>

            <Show when="signed-out">
              <AuthButtons />
            </Show>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
