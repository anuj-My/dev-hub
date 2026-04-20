"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  RiDashboardLine,
  RiCompass3Line,
  RiUserLine,
  RiBookmarkLine,
  RiHomeLine,
} from "@remixicon/react";

const navItems = [
  { title: "Home", url: "/", icon: RiHomeLine },
  { title: "Explore", url: "/explore", icon: RiCompass3Line },
  { title: "Dashboard", url: "/dashboard", icon: RiDashboardLine },
  { title: "Profile", url: "/profile", icon: RiUserLine },
  { title: "Bookmarks", url: "/bookmarks", icon: RiBookmarkLine },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar side="left">
      <SidebarHeader className="p-4" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.url}>
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
