import React, { PropsWithChildren } from 'react'
import AdminNavbar from './navbar'

export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <AdminNavbar />
            <main className='p-8'>
                {children}
            </main>
        </div>
    )
}
