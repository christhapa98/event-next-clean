import ImageUploadLarge from '@/common/components/ui/form/image-upload-large'
import { Label } from '@/common/components/ui/label'
import React from 'react'
import ToggleComponents from './components'

export default function PageDesign() {
    return (
        <div className='grid grid-cols-2 gap-8'>
            <div className='space-y-2'>
                <Label>Background image</Label>
                <ImageUploadLarge id={''} onChange={function (image: string | File): void {
                }} />
            </div>
            <div className='space-y-2'>
                <Label>Post Show Poster</Label>
                <ImageUploadLarge id={''} onChange={function (zimage: string | File): void {
                }} />
            </div>
            <div className='space-y-2'>
                <Label>Pre Show Poster</Label>
                <ImageUploadLarge id={''} onChange={function (image: string | File): void {
                }} />
            </div>
            <ToggleComponents/>
        </div>
    )
}
