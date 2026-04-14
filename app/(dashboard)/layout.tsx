import Container from "@/components/global/Container";
import Navbar from "@/components/navbar/Navbar";

const DashbaordLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Container className="py-20">{children}</Container>
    </>
  );
};

export default DashbaordLayout;
