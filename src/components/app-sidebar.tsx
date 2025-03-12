'use client'

import {
    Home,
    ShoppingBasket,
    ChefHat,
    ShoppingCart,
    BarChart,
    Settings,
    Moon,
    Sun,
} from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function AppSidebar() {
    const { setTheme, theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const currentTheme = resolvedTheme || theme
    const isDark = currentTheme === "dark"

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        if (mounted) {
            const currentTheme = resolvedTheme || theme
            setTheme(currentTheme === "dark" ? "light" : "dark")
            console.log("Alternando tema de", currentTheme, "para", currentTheme === "dark" ? "light" : "dark")
        }
    }

    return (
        <Sidebar collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <Link className="flex items-center justify-center gap-3" href="/">
                                        <ShoppingBasket />
                                        <span className="text-3xl">Smartpantry</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-2xl mb-4">Navegação</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/dashboard">
                                        <Home />
                                        <span className="text-lg">Dashboard</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/dashboard">
                                        <ShoppingBasket />
                                        <span className="text-lg">Inventário</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/dashboard">
                                        <ChefHat />
                                        <span className="text-lg">Receitas</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/dashboard">
                                        <ShoppingCart />
                                        <span className="text-lg">Lista de Compras</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/dashboard">
                                        <BarChart />
                                        <span className="text-lg">Relatórios</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel className="text-xl mb-4">Configurações</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/dashboard">
                                        <Settings />
                                        <span className="text-lg">Configurações</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="cursor-pointer" onClick={toggleTheme}>
                                    {isDark ? <Sun /> : <Moon />}
                                    <span className="text-lg">{isDark ? "Modo Claro" : "Modo Escuro"}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
