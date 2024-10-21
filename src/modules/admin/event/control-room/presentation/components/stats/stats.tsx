import { Eye, User } from 'lucide-react'
import React from 'react'

export default function Stats() {
    return (
        <div className='w-full  border-b py-4 flex justify-start gap-8 items-center'>
            <div className='items-center flex flex-col border-r pr-5'>
                <div className='flex gap-2 items-center'>
                    <User />
                    <p className='text-xl'>240</p>
                </div>
                <p>Total registered users</p>
            </div>
            <div className='items-center flex flex-col border-r pr-5'>
                <div className='flex gap-2 items-center'>
                    <Eye />
                    <p className='text-xl'>40</p>
                </div>
                <p>Watching Now</p>
            </div>
            <div className='items-center flex flex-col border-r pr-5'>
                <div className='flex gap-2 items-center'>
                    <p className='text-xl'>240</p>
                </div>
                <p>Total registered users</p>
            </div>
        </div>
    )
}
