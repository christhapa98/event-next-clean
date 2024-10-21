import React from 'react'
import { PublicChatDrawer } from './public-chat'
import { PollsDrawer } from './polls/polls'
import { SupportDrawer } from './support/support'
import { PublicMessageDrawer } from './public-message'

export default function ControlAction() {
    return (
        <div className='w-[80px] border-l fixed right-0 h-full'>
            <div className='flex flex-col gap-6 items-center justify-center h-full'>
                <PublicChatDrawer />
                <PollsDrawer />
                <SupportDrawer />
                <PublicMessageDrawer />
            </div>
        </div>
    )
}
