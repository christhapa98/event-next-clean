import React from 'react'
import { Input } from "@/common/components/ui/form/input"
import { SendHorizonal } from "lucide-react"

export default function SendInput() {
    return (
        <div className="flex gap-2 relative w-full border ">
            <Input className="border-0 grow" />
            <SendHorizonal className="absolute right-2 top-2" />
        </div>
    )
}
