import React from 'react'
import PublicChat from './components/chat/public-chat'
import EventPlayer from './components/player'

export default function EventHome() {
    return (
        <div>
            <div className='h-[50vh] grid grid-cols-3 gap-8'>
                <div className='col-span-2 space-y-4'>
                    <EventPlayer />
                    <h5 className='text-xl'>Albatross Nepal</h5>
                </div>
                <div>
                    <PublicChat />
                </div>
            </div>
        </div>
    )
}
