import React, { Fragment } from 'react'
import ImageUploadLarge from '@/common/components/ui/form/image-upload-large'
import { Label } from '@/common/components/ui/label'
import PageColorConfigurator from './page-colors'

export default function PageDesign() {
    return (
        <Fragment>
            <div className='space-y-2'>
                <Label>Background image</Label>
                <ImageUploadLarge id={''} onChange={function (image: string | File): void {
                }} />
            </div>
            <div className='space-y-2'>
                <Label>Header image</Label>
                <ImageUploadLarge id={''} onChange={function (image: string | File): void {
                }} />
            </div>
            <PageColorConfigurator />
        </Fragment>
    )
}
