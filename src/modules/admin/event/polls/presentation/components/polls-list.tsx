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
import { Edit, Trash } from 'lucide-react'

export default function PollsList() {
    const polls = [
        {
            name: 'Albatross Nepal',
            type: "Single",
            answers: [
                {
                    id: 1,
                    answer: 'Yes',
                },
                {
                    id: 2,
                    answer: 'No',
                }

            ],
            status: 'New'
        },
        {
            name: 'New Year Nepal 2081',
            type: "Multiple",
            answers: [
                {
                    id: 1,
                    answer: 'Yes',
                },
                {
                    id: 2,
                    answer: 'No',
                }
            ],
            status: 'Published'
        }
    ]
    return (
        <Table>
            <TableCaption>List of Polls</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead >Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className='w-[100px]'>Status</TableHead>
                    <TableHead className="text-right w-[100px]">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {polls.map((poll, index) => (
                    <TableRow className='cursor-pointer hover:scale-95 transition-all' key={index}>
                        <TableCell className=''>
                            <p>{poll.name}</p>
                            <p className='text-md font-bold'>Answers</p>
                            <div>
                                {poll.answers.map((answer, index) => (
                                    <p key={index}>{index + 1}. {answer.answer}</p>
                                ))}
                            </div>
                        </TableCell>
                        <TableCell>{poll.type}</TableCell>
                        <TableCell>{poll.status}</TableCell>
                        <TableCell className="text-right space-x-3">
                            <button className="btn btn-primary btn-sm"><Edit size={16} /></button>
                            <button className="btn btn-primary btn-sm"><Trash size={16} /></button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
