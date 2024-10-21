import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/common/components/ui/sheet"
import { VoteIcon } from "lucide-react"

export function PollsDrawer() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="flex gap-2 items-center flex-col">
                    <VoteIcon />
                    <p className="text-xs">Polls</p>
                </div>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader>
                    <SheetTitle>Polls</SheetTitle>
                </SheetHeader>
                <div className="h-full overflow-y-scroll grow">

                </div>
            </SheetContent>
        </Sheet>
    )
}
