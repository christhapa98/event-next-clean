import React from 'react'
import AdminList from './components/admin-list'
import EventPageHeader from '@/common/components/ui/admin/page-header'
import { Button } from '@/common/components/ui/button'
import AdminSheet from './components/admin-sheet'

export default function Admins() {
    return (
        <div>
            <div className='flex justify-between'>
            <EventPageHeader title='Admins' />
           <AdminSheet/>
           </div>
            <div>
                <AdminList />
            </div>
        </div>
    )
}
