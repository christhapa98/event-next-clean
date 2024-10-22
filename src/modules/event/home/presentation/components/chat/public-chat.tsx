import { Input } from '@/common/components/ui/form/input'
import React from 'react'

export default function PublicChat() {
    return (
        <div className='border h-full flex flex-col' >
            <p className='px-4 py-2 text-sm shadow'>Public Chat</p>
            <div className='grow overflow-y-scroll h-full text-xs p-4 space-y-3' >

            </div>
            <Input className='border-t' />
        </div>
    )
}
