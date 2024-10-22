"use client"
import EventPageHeader from '@/common/components/ui/admin/page-header'
import React from 'react'
import PageDesign from './components/design/page-design'
import EventAuth from './components/auth/event-auth'

export default function AuthenticationPageSetup() {
    return (
        <div className='space-y-4 '>
            <EventPageHeader title='Authentication Page Setup' description='Setup your event Authentication page' />
            <div className='grid grid-cols-2 gap-8 h-full'>
                <div className='space-y-4'>
                    <h4 className='text-lg font-semibold'>Event Authentication</h4>
                    <EventAuth />
                </div>
                <div className='space-y-4'>
                    <h4 className='text-lg font-semibold'>Auth Page Design</h4>
                    <PageDesign />
                </div>
            </div>
        </div>
    )
}
