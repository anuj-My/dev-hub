import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Container from "@/components/global/Container";
import Navbar from "@/components/navbar/Navbar";
import AppSidebar from "@/components/sidebar/AppSidebar";

const DashbaordLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full flex-1 flex flex-col">
        <Navbar />
        <div className="p-4">
          <SidebarTrigger className="-ml-1" size='icon-lg' />
        </div>
        <Container>{children}</Container>
      </main>
    </SidebarProvider>
  );
};

export default DashbaordLayout;
