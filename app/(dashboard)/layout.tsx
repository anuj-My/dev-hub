import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Container from "@/components/global/Container";
import Navbar from "@/components/navbar/Navbar";
import AppSidebar from "@/components/sidebar/AppSidebar";

const DashbaordLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <Navbar />
      <AppSidebar />
      <main className="py-20">
        <SidebarTrigger />
        <Container className="py-20">{children}</Container>
      </main>
    </SidebarProvider>
  );
};

export default DashbaordLayout;
