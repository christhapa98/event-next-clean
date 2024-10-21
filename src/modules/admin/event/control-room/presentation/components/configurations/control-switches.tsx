import { Button } from '@/common/components/ui/button'
import { Switch } from '@/common/components/ui/form/switch'
import { Label } from '@/common/components/ui/label'
import { Play } from 'lucide-react'
import React from 'react'

export default function ControlSwitches() {
  return (
    <div className='w-full  border-y py-4 flex justify-between'>
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
      <div>
        <Button className='flex gap-2'>
          <Play /> <span>Start</span>
        </Button>
      </div>
    </div>
  )
}
