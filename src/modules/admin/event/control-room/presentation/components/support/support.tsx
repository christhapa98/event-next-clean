import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/common/components/ui/sheet"
import { CircleHelp } from "lucide-react"

export function SupportDrawer() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="flex gap-2 items-center flex-col">
                    <CircleHelp />
                    <p className="text-xs">Support</p>
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
