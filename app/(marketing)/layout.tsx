import Container from "@/components/global/Container";
import Navbar from "@/components/navbar/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Container className="py-10">{children}</Container>
    </>
  );
};

export default HomeLayout;
