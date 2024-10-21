import React, { PropsWithChildren } from 'react'

export default function ControlRoomLayout({ children }: PropsWithChildren) {
    return (
        <div className='h-full flex w-full'>
            {children}
        </div>
    )
}
