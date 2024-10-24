import EventPageHeader from '@/common/components/ui/page-header'
import { Input } from '@/common/components/ui/form/input'
import { Label } from '@/common/components/ui/label'
import React from 'react'

export default function PlayerConfig() {
    return (
        <div className='space-y-4'>
            <EventPageHeader title='Player Configuration' />
            <div className='grid grid-cols-2 gap-6'>
                <div className='col-span-1'>
                    <EventPageHeader size='text-md' title='Primary' />
                    <div className='space-y-2'>
                        <Label>Type</Label>
                        <Input />
                    </div>
                    <div className='space-y-2'>
                        <Label>Url</Label>
                        <Input placeholder='Hls Url' />
                    </div>
                </div>
                <div className='col-span-1'>
                    <EventPageHeader size='text-md' title='Backup' />
                    <div className='space-y-2'>
                        <Label>Type</Label>
                        <Input />
                    </div>
                    <div className='space-y-2'>
                        <Label>Url</Label>
                        <Input placeholder='Hls Url' />
                    </div>
                </div>
            </div>
        </div>
    )
}
