"use client"
import EventPageHeader from '@/common/components/ui/admin/page-header'
import React from 'react'
import PageDesign from './components/page-design'

export default function PlayPageSetup() {
    return (
        <div className='space-y-4'>
            <EventPageHeader title='Play Page Setup' description='Setup your event Live page' />
            <PageDesign />
        </div>
    )
}
