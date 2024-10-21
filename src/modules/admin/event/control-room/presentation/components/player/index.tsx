import CusSelect from '@/common/components/ui/form/select/select'
import React from 'react'

export default function ControlRoomPlayer() {
    return (
        <div className='space-y-4 border-b pb-2'>
            <div className='flex gap-4 w-full justify-evenly items-center'>
                <h5 className='text-lg w-full'>Player</h5>
                <CusSelect
                    label=""
                    options={
                        [
                            { value: 'Primary', label: 'Primary' },
                            { value: 'Backup', label: 'Backup' },
                        ]}
                    defaultValue={"Primary"}
                />
            </div>
            <div className=' aspect-video bg-black'></div>
        </div>
    )
}
