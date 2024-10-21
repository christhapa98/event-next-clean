"use client"
import React from 'react'
import { ModeToggle } from '../../ui/toggle-mode'
import { LogOutIcon, User } from 'lucide-react'
import { Button } from '../../ui/button'
import { useTheme } from 'next-themes'

export default function EventNavbar({ title = true }: { title?: boolean }) {
    const theme = useTheme()

    return (
        <div className={`${theme.theme === 'dark' ? 'bg-black' : 'bg-white'} border-b flex items-center justify-center sticky top-0 `}>
            <div className='h-[60px] flex items-center justify-between max-w-5xl w-full'>
                {title ? <h1 className='text-2xl font-bold'>Event</h1> : <div />}
                <div className='space-x-4'>
                    <ModeToggle />
                    <Button variant={"ghost"}>
                        <User size={18} />
                    </Button>
                    <Button variant={"ghost"}>
                        <LogOutIcon size={18} />
                    </Button>
                </div>
            </div>
        </div>
    )
}
