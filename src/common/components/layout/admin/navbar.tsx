"use client"
import React from 'react'
import { ModeToggle } from '../../ui/toggle-mode'
import { LogOutIcon, User } from 'lucide-react'
import { Button } from '../../ui/button'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function AdminNavbar({ title = true }: { title?: boolean }) {
    const theme = useTheme()
    return (
        <div className={`${theme.theme === 'dark' ? '' : 'bg-white'}w-full border-b h-[60px] flex items-center px-8 sticky top-0 justify-between`}>
            {title ? <h1 className='text-2xl font-bold'>Admin</h1> : <div />}
            <div className='space-x-4'>
                <ModeToggle />
                <Link href="/admin/profile">
                    <Button variant={"ghost"}>
                        <User size={18} />
                    </Button>
                </Link>
                <Button variant={"ghost"}>
                    <LogOutIcon size={18} />
                </Button>
            </div>
        </div>
    )
}
