import React from 'react'
import EventList from './components/event-list'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/common/components/ui/tabs'
import { Button } from '@/common/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href={'/admin/create-event'}><Button className='float-right'>Create event</Button></Link>
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="banned">Live</TabsTrigger>
        </TabsList>
        <TabsContent className='w-full' value="all">
          <EventList />
        </TabsContent>
        <TabsContent className='w-full' value="banned">
        </TabsContent>
      </Tabs>
    </div>
  )
}
