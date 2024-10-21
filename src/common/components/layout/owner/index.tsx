import React, { PropsWithChildren } from 'react'
import OwnerNavbar from './navbar'

export default function OwnerLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <OwnerNavbar />
            <main className='p-8'>
                {children}
            </main>
        </div>
    )
}
