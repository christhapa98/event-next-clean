import React, { PropsWithChildren } from 'react'
import EventNavbar from './navbar'

export default function EventHomeLayout({ children }: PropsWithChildren) {
    return (
        <div className='flex flex-col px-5 h-screen w-full'>
            <EventNavbar />
            <main className='max-w-7xl w-full mx-auto grow'>
                {children}
            </main>
        </div>
    )
}
