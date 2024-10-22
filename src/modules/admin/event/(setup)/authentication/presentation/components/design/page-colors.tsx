import EventPageHeader from '@/common/components/ui/admin/page-header'
import ColorPicker from '@/common/components/ui/form/color-picker'
import React, { Fragment } from 'react'

export default function PageColorConfigurator() {
    return (
        <Fragment>
            <EventPageHeader title='Page Colors' />
            <div className='grid grid-cols-3 gap-4'>
                <ColorPicker label={'Background Color'} onChange={undefined} value={undefined} />
                <ColorPicker label={'Card Color'} onChange={undefined} value={undefined} />
                <ColorPicker label={'Card Text Color'} onChange={undefined} value={undefined} />
                <ColorPicker label={'Button Color'} onChange={undefined} value={undefined} />
                <ColorPicker label={'Button Text Color'} onChange={undefined} value={undefined} />
            </div>
        </Fragment>
    )
}
