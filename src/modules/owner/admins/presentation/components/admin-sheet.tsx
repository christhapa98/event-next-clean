import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/common/components/ui/sheet"
import { Button } from '@/common/components/ui/button'

export default function AdminSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>Register Admin</Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader>
                    <SheetTitle>Register Admin</SheetTitle>
                </SheetHeader>
                <SheetFooter>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

