import React from 'react'
import PublicChat from './components/chat/public-chat'
import EventPlayer from './components/player'

export default function EventHome() {
    return (
        <div className='h-full flex gap-8 py-8'>
            <div className='space-y-4 h-full overflow-y-scroll aspect-video'>
                <EventPlayer />
                <h5 className='text-xl'>Albatross Nepal</h5>
            </div>
            <div className='h-full overflow-y-scroll min-w-[300px]'>
                <PublicChat />
            </div>
        </div>
    )
}
