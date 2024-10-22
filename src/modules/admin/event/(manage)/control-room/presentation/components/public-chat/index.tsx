import { Input } from "@/common/components/ui/form/input"
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/common/components/ui/sheet"
import { MessageCircle, SendHorizonal } from "lucide-react"
import PublicChatList from "./list"

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
                    <div className="flex gap-2 relative w-full border border-slate-500">
                        <Input className="border-0 grow"/>
                        <SendHorizonal className="absolute right-2 top-2" />
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
