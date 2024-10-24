import { Button } from '@/common/components/ui/button'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/common/components/ui/sheet"
import CreateEventForm from './create-event.form'

export default function CreateEventDrawer() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className='float-right'>Create event</Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader>
                    <SheetTitle>Create Event</SheetTitle>
                </SheetHeader>
                <CreateEventForm />
                <SheetFooter>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
