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

export default function AdminList() {

    const events = [
        {
            name: 'Albatross Nepal',
            status: 'Upcoming'
        },
        {
            name: 'New Year Nepal 2081',
            status: 'Upcoming'
        }
    ]

    return (
        <Table>
            <TableCaption>List of Events</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead >Name</TableHead>
                    <TableHead className="text-right w-[100px]">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {events.map((event, index) => (
                    <TableRow className='cursor-pointer hover:scale-95 transition-all' key={index}>
                        <TableCell>{event.name}</TableCell>
                        <TableCell className="text-right">
                            <button className="btn btn-primary btn-sm">View</button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
