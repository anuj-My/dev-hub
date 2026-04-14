import Link from "next/link";
import Container from "../global/Container";

const Navbar = () => {
  return (
    <div>
      <Container>
        Navbar
        <div>
          <Link href="/sign-in">Sign In</Link>
          <Link href="/sign-up">Sign up</Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
