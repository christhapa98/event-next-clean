import React, { PropsWithChildren } from 'react'
import AdminSidebar from './sidebar'
import AdminNavbar from '../navbar'

export default function AdminEventLayout({ children }: PropsWithChildren) {
    return (
        <div className='h-screen flex w-screen'>
            <AdminSidebar />
            <main className='grow w-full'>
                <AdminNavbar title={false} />
                <div>
                    {children}
                </div>
            </main>
        </div>
    )
}
