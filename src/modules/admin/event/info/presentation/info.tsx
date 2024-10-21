import EventPageHeader from '@/common/components/ui/admin/page-header'
import React from 'react'
import BasicInfo from './components/basic-info'
import BrandingSettings from './components/branding-setting'

export default function EventInfo() {
    return (
        <div className='space-y-4'>
            <EventPageHeader title='Event Detail' />
            <BasicInfo />
            <BrandingSettings />
        </div>
    )
}
