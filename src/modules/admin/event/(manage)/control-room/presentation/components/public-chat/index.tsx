import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/common/components/ui/sheet"
import { MessageCircle } from "lucide-react"
import PublicChatList from "./list"
import SendInput from "@/common/components/chat/send-input"

export function PublicChatDrawer() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="flex gap-2 items-center flex-col">
                    <MessageCircle />
                    <p className="text-xs">Chat</p>
                </div>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader>
                    <SheetTitle>Public Chat</SheetTitle>
                </SheetHeader>
                <PublicChatList />
                <SheetFooter>
                    <SendInput />
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
