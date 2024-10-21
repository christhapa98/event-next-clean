import AdminLayout from '@/common/components/layout/admin'
import React, { PropsWithChildren } from 'react'

export default function AdminHomeLayout({ children }: PropsWithChildren) {
    return (
        <AdminLayout>
            {children}
        </AdminLayout>
    )
}
