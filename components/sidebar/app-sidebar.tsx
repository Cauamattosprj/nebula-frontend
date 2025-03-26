import {
    Home,
    Settings,
    Notebook,
    AlarmClock,
    ChartColumn,
    CalendarIcon,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

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
            <SidebarContent className="bg-tab text-white">
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
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
