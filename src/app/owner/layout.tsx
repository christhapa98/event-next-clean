import OwnerLayout from '@/common/components/layout/owner'
import React, { PropsWithChildren } from 'react'

export default function OwnerRootLayout({ children }: PropsWithChildren) {
    return (
        <OwnerLayout>
            {children}
        </OwnerLayout>
    )
}
