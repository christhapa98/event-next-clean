import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/common/components/ui/table/table"

export default function EventList() {

    const events = [
        {
            name: 'Albatross Nepal',
            date: new Date().toDateString(),
            status: 'Upcoming'
        },
        {
            name: 'New Year Nepal 2081',
            date: new Date().toDateString(),
            status: 'Upcoming'
        }
    ]
    return (
        <Table>
            <TableCaption>List of Events</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead >Name</TableHead>
                    <TableHead>Event Dates</TableHead>
                    <TableHead className='w-[100px]'>Status</TableHead>
                    <TableHead className="text-right w-[100px]">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {events.map((event, index) => (
                    <TableRow className='cursor-pointer hover:scale-95 transition-all' key={index}>
                        <TableCell>{event.name}</TableCell>
                        <TableCell>{event.date}</TableCell>
                        <TableCell>{event.status}</TableCell>
                        <TableCell className="text-right">
                            <button className="btn btn-primary btn-sm">View</button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
