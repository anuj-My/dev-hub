import Container from "@/components/global/Container";
import Navbar from "@/components/navbar/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default HomeLayout;
