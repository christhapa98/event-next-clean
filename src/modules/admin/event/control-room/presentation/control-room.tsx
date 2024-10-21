import EventPageHeader from '@/common/components/ui/admin/page-header'
import React from 'react'
import ControlSwitches from './components/configurations/control-switches'
import ControlAction from './components/control-action'
import ControlRoomPlayer from './components/player'
import Stats from './components/stats/stats'

export default function ControlRoom() {
    return (
        <div className='flex w-full pr-[100px] overflow-hidden'>
            <div className='space-y-4 h-full w-full'>
                <EventPageHeader title='Control Room' />
                <div>
                    <ControlSwitches />
                    <Stats />
                </div>
                <div className='grid grid-cols-2 gap-4 overflow-y-scroll h-full  w-full'>
                    <div className='col-span-1 space-y-2' >
                        <ControlRoomPlayer />
                    </div>
                    <div className='h-full col-span-1'>
                    </div>
                </div>
            </div>
            <ControlAction />
        </div >
    )
}
