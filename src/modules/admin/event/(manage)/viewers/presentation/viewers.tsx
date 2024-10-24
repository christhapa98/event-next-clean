import EventPageHeader from '@/common/components/ui/page-header'
import React from 'react'
import ViewersList from './viewers-ilist'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/common/components/ui/tabs'

export default function Viewers() {
    return (
        <div className='space-y-4'>
            <EventPageHeader title='Viewers' />
            <Tabs defaultValue="all" className="w-full">
                <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="banned">Banned</TabsTrigger>
                </TabsList>
                <TabsContent className='w-full' value="all">
                    <ViewersList />
                </TabsContent>
                <TabsContent className='w-full' value="banned">
                </TabsContent>
            </Tabs>
        </div>
    )
}
