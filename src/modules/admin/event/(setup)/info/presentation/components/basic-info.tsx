"use client"
import ImageUploadLarge from '@/common/components/ui/form/image-upload-large'
import { Label } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { Input } from '@/common/components/ui/form/input';
import EventPageHeader from '@/common/components/ui/page-header';
import TextEditor from '@/common/components/editor/editor';

export default function BasicInfo() {
  return (
    <div className='space-y-4 pb-4 w-fit'>
      <EventPageHeader size='text-lg' title='Basic Information' />
      <div className='flex gap-8'>
        {/* Logo */}
        <div className='space-y-2 w-[200px]'>
          <Label>Event Logo</Label>
          <ImageUploadLarge id={''} onChange={function (image: string | File): void {
          }} />
        </div>
        <div className='grow grid grid-cols-2 gap-8'>
          {/* Basic Information */}
          <div className='space-y-2'>
            <div className='space-y-2'>
              <Label>Event Name</Label>
              <Input type="text" />
            </div>
            <div className='space-y-2'>
              <Label>Slug</Label>
              <Input type="text" />
            </div>
            <div className='grow grid grid-cols-2 gap-8'>
              <div className='space-y-2'>
                <Label>Start Date</Label>
                <Input type="date" />
              </div>
              <div className='space-y-2'>
                <Label>End Date</Label>
                <Input type="date" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3'>
        <div className='col-span-2 pr-[80px] space-y-4'>
          <EventPageHeader size='text-lg' title='Event Description' />
          <TextEditor editorValues={''} getEditorValues={function (value: string): void {
            console.log(value)
          }} />
        </div>
      </div>
    </div>
  )
}
