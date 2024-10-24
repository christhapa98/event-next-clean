import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/common/components/ui/tabs'
import EventList from './event-list/event-list'

export default function EventTab() {
    return (
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
    )
}
