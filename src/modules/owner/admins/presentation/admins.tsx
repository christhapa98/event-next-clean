import React from 'react'
import AdminList from './components/admin-list'
import EventPageHeader from '@/common/components/ui/admin/page-header'
import { Button } from '@/common/components/ui/button'

export default function Admins() {
    return (
        <div>
            <div className='flex justify-between'>
            <EventPageHeader title='Admins' />
            <Button>Register Admin</Button>
           </div>
            <div>
                <AdminList />
            </div>
        </div>
    )
}
