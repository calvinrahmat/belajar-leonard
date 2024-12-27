import { Album, Axe, Boxes, Flame, Map, Sparkles } from "lucide-react"

import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

// Buat Main Menu Onimusha
const data = {
    items : [
        {
            title: "Equip",
            url: "#",
            icon: Axe,
            isActive: true,
            items: [
                {
                    title: "Equip",
                    url: "#",
                    icon: Axe,
                }
            ]
        },
        {
            title: "Item",
            url: "#",
            icon: Boxes,
            isActive: true,
            items: [
                {
                    title: "Item",
                    url: "#",
                    icon: Boxes,
                }
            ]
        },
        {
            title: "Item",
            url: "#",
            icon: Boxes,
            isActive: true,
            items: [
                {
                    title: "Item",
                    url: "#",
                    icon: Boxes,
                }
            ] 
        },
        {
            title: "Ako",
            url: "#",
            icon: Sparkles,
            isActive: true,
            items: [
                {
                    title: "Ako",
                    url: "#",
                    icon: Sparkles,
                }
            ]   
        },
        {
            title: "File",
            url: "#",
            icon: Album,
            isActive: true,
            items: [
                {
                    title: "File",
                    url: "#",
                    icon: Album,
                }
            ] 
        },
        {
            title: "Map",
            url: "#",
            icon: Map,
            isActive: true,
            items: [
                {
                    title: "Map",
                    url: "#",
                    icon: Map,
                }
            ] 
        },
    ]
}

export function AppSidebar() {
  return (
     <Sidebar collapsible= "icon">
      <SidebarHeader />  
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                     <a href="#">
                     <Flame />
                     <span>Soul</span>
                    </a>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Red Soul</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Blue Soul</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Yellow Soul</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}
