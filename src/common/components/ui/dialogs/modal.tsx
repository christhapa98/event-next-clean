import React from 'react'
import { Dialog, DialogContent, DialogHeader } from './dialog'
import { DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'

type Props = {
    title: string | React.ReactNode,
    content: React.ReactNode,
    trigger: React.ReactNode | string

}

export default function Modal({ title, content, trigger }: Props) {
    return (
        <Dialog>
            <DialogTrigger>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogContent>
                        {content}
                    </DialogContent>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}
