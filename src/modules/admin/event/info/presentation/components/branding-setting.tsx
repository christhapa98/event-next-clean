"use client"
import EventPageHeader from '@/common/components/ui/admin/page-header'
import ImageUploadLarge from '@/common/components/ui/form/image-upload-large'
import { Input } from '@/common/components/ui/form/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import React from 'react'

export default function BrandingSettings() {
    return (
        <div className='space-y-4'>
            <EventPageHeader size='text-lg' title='Browser Branding' />
            <div className='flex gap-8'>
                <div className='space-y-2 w-[200px]'>
                    <Label>FavIcon</Label>
                    <ImageUploadLarge id={''} onChange={function (image: string | File): void {
                    }} />
                </div>
                <div className='space-y-2 '>
                    <div>
                        <Label>Title</Label>
                        <Input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}
