import React from 'react'
import OwnerLoginForm from './components/form'

export default function OwnerLogin() {
    return (
        <div className='m-auto h-screen grid grid-cols-2'>
            <div className='col-span-1 m-auto space-y-3'>
                <h1 className='text-4xl font-bold'>Owner Login</h1>
                <OwnerLoginForm />
            </div>
            <div className='col-span-1 bg-gradient-to-r from-pink-500 to-rose-500' />
        </div>
    )
}
