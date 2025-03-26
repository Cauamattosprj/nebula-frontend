import {
    Home,
    Settings,
    Notebook,
    AlarmClock,
    ChartColumn,
    CalendarIcon,
    ChevronDown,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "#",
        icon: Home,
    },
    {
        title: "Sessão",
        url: "#",
        icon: AlarmClock,
    },
    {
        title: "Caderno",
        url: "#",
        icon: Notebook,
    },
    {
        title: "Estatísticas",
        url: "#",
        icon: ChartColumn,
    },
    {
        title: "Calendário",
        url: "#",
        icon: CalendarIcon,
    },
    {
        title: "Configuração",
        url: "#",
        icon: Settings,
    },
];

export function AppSidebar() {
    return (
        <Sidebar side="left" variant="floating">
            <SidebarHeader className="bg-tab">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton className="bg-[hsl(203,78%,10%)] text-white font-bold h-14 p-2 shadow-lg border-blue-200 border-[1px]">
                                    <div className="h-8 w-8 bg-blue-600 rounded-full"></div>
                                    Nome do Usuário
                                    <ChevronDown className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[--radix-popper-anchor-width] bg-green-200">
                                <DropdownMenuItem>
                                    <span>Acme Inc</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Acme Corp.</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="bg-tab text-white">
                <SidebarGroup>
                    <SidebarGroupLabel>Nebula</SidebarGroupLabel>
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
        </Sidebar>
    );
}
