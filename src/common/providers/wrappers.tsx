"use client"
import React from 'react'
import { ThemeProvider } from './theme-provider'
import { SessionProvider } from 'next-auth/react'
import type { Session } from "next-auth"

export default function Wrappers({ session, children }: { session: Session | null, children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <SessionProvider session={session}>
                {children}
            </SessionProvider>
        </ThemeProvider>
    )
}
