import React, { PropsWithChildren } from 'react'
import EventNavbar from './navbar'
import Script from 'next/script'

export default function EventHomeLayout({ children }: PropsWithChildren) {
    return (
        <div className='flex flex-col px-5 h-screen w-full'>
            <EventNavbar />
            <main className='max-w-7xl w-full mx-auto grow'>
                {children}
            </main>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.14.3/video.min.js" />
            <Script src="https://player.live-video.net/1.33.0/amazon-ivs-videojs-tech.min.js" />
        </div>
    )
}
