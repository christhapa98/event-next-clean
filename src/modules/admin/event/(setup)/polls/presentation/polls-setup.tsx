import EventPageHeader from '@/common/components/ui/admin/page-header'
import React from 'react'
import PollsList from './components/polls-list'

export default function PollsSetup() {
  return (
    <div className='space-y-4'>
      <EventPageHeader title='Polls Setup' />
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-1'>

        </div>
        <div className='col-span-2 border-l '>
          <PollsList />
        </div>

      </div>
    </div>
  )
}
