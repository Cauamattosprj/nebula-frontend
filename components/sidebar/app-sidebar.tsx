import {
    Home,
    Settings,
    Notebook,
    AlarmClock,
    ChartColumn,
    CalendarIcon,
    ChevronDown,
    PlusIcon,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
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
import Link from "next/link";
import Image from "next/image";
import { Separator } from "../ui/separator";

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

// PROPERTIES
const USER_SESSION_COOKIES = [
    {
        id: 1,
        name: "Cauã Mattos",
        email: "caua.mattos@example.com",
        avatar: "https://i.pravatar.cc/150?u=caua.mattos",
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // Expira em 7 dias
    },
    {
        id: 2,
        name: "Rayanne Maria",
        email: "rayanne.maria@example.com",
        avatar: "https://i.pravatar.cc/150?u=rayanne.maria",
        expiresAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // Expira em 3 dias
    },
    {
        id: 3,
        name: "Maria Taurrent",
        email: "maria.taurrent@example.com",
        avatar: "https://i.pravatar.cc/150?u=maria.taurrent",
        expiresAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // Expira em 5 dias
    },
];
export function AppSidebar() {
    return (
        <Sidebar side="left" variant="floating">
            <SidebarContent className="bg-tab-800 text-white justify-between py-6">
                <SidebarGroup>
                    {/* <SidebarGroupLabel>Nebula</SidebarGroupLabel> */}
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className="side-btn">
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarFooter className="mx-2 p-0 rounded-xl">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuButton className="side-btn text-white h-14 p-2">
                                        <div className="h-8 w-8 bg-blue-600 rounded-full overflow-hidden">
                                            <Image
                                                src={
                                                    USER_SESSION_COOKIES[0]
                                                        .avatar
                                                }
                                                alt="User avatar"
                                                height={80}
                                                width={80}
                                            />
                                        </div>
                                        {USER_SESSION_COOKIES[0].name}
                                        <ChevronDown className="ml-auto" />
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-[--radix-popper-anchor-width] bg-tab-700 text-white border border-white/10">
                                    {USER_SESSION_COOKIES.map((user) => (
                                        <DropdownMenuItem
                                            key={user.id}
                                            className="hover:bg-tab-500"
                                        >
                                            <Link
                                                href={user.email}
                                                className="flex items-center  gap-x-2 w-full"
                                            >
                                                <div className="h-8 w-8 bg-blue-600 rounded-full overflow-hidden">
                                                    <Image
                                                        src={user.avatar}
                                                        alt="User avatar"
                                                        height={80}
                                                        width={80}
                                                    />
                                                </div>
                                                <span>{user.name}</span>
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                    <Separator className="bg-white/10 m-2" />
                                    <DropdownMenuItem>
                                        <Link
                                            href={"#TODO"}
                                            className="flex items-center justify-between w-full hover:bg-tab-500 p-2 rounded-sm"
                                        >
                                            <span>Adicionar nova conta</span>
                                            <PlusIcon />
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </SidebarContent>
        </Sidebar>
    );
}
