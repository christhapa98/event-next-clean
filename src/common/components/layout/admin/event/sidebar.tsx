"use client"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/common/components/ui/sidebar'
import React from 'react'
import { Info, Lock, Mail, Play, TowerControl, UserRoundSearch, Users, UsersIcon, Vote } from "lucide-react"
import Link from 'next/link'
import { useParams } from 'next/navigation'

const items = (event: string) => [
    {
        title: "Info",
        url: "/admin/" + event + "/",
        icon: Info,
    },
    {
        title: "Authentication Page",
        url: "authentication",
        icon: Lock,
    },
    {
        title: "Play Page",
        url: "play",
        icon: Play,
    },
    {
        title: "Polls",
        url: "polls",
        icon: Vote,
    },
    {
        title: "Control Room",
        url: "control-room",
        icon: TowerControl,
    },
    {
        title: "Viewers",
        url: "viewers",
        icon: Users,
    },
    {
        title: "Moderators",
        url: "moderators",
        icon: UsersIcon,
    },
    {
        title: "Email Configuration",
        url: "email-configuration",
        icon: Mail,
    }
]

export default function AdminSidebar() {
    const { event } = useParams();
    return (
        <Sidebar className='shadow'>
            <SidebarContent className='h-full pb-8 py-4'>
                <SidebarGroupLabel className='text-xl px-4 font-bold'>Event</SidebarGroupLabel>
                <SidebarGroup className='space-y-5 h-full'>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items(event as string).map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
