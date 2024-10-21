import AdminEventLayout from '@/common/components/layout/admin/event'
import { SidebarProvider } from '@/common/components/ui/sidebar'
import React, { PropsWithChildren } from 'react'

export default function AdminEventRootLayout({ children }: PropsWithChildren) {
    return (
        <SidebarProvider>
            <AdminEventLayout>
                <div className='py-8 pl-8'>
                    {children}
                </div>
            </AdminEventLayout>
        </SidebarProvider>
    )
}
