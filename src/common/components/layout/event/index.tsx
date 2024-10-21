import React, { PropsWithChildren } from 'react'
import EventNavbar from './navbar'

export default function EventHomeLayout({ children }: PropsWithChildren) {
    return (
        <div className='px-5'>
            <EventNavbar />
            <main className='max-w-5xl mx-auto'>
                {children}
            </main>
        </div>
    )
}
