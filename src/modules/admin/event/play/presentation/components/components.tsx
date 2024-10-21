import EventPageHeader from '@/common/components/ui/admin/page-header'
import React from 'react'
import { Button } from '@/common/components/ui/button'
import { Switch } from '@/common/components/ui/form/switch'
import { Label } from '@/common/components/ui/label'
export default function ToggleComponents() {
    return (
        <div className='space-y-4'>
            <EventPageHeader title={'Components Configuration'} />
            <div className='flex flex-wrap gap-4'>
                <div className='flex gap-2 items-center'>
                    <Label>Public Chat</Label>
                    <Switch />
                </div>
                <div className='flex gap-2 items-center'>
                    <Label>Q&A</Label>
                    <Switch />
                </div>
                <div className='flex gap-2 items-center'>
                    <Label>Polls</Label>
                    <Switch />
                </div>
                <div className='flex gap-2 items-center'>
                    <Label>Support Chat</Label>
                    <Switch />
                </div>
            </div>
        </div>
    )
}
