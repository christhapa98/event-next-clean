import SendInput from "@/common/components/ui/chat/send-input"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/common/components/ui/sheet"
import { AlertCircle } from "lucide-react"

export function BroadcastMessageDrawer() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="flex gap-2 items-center flex-col">
                    <AlertCircle />
                    <p className="text-xs">Broadcast</p>
                </div>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader>
                    <SheetTitle>Broadcast Message</SheetTitle>
                </SheetHeader>
                <div className="grow h-full overflow-y-scroll"></div>
                <SendInput />
            </SheetContent>
        </Sheet>
    )
}
