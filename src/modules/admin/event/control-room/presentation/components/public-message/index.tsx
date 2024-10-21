import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/common/components/ui/sheet"
import { AlertCircle } from "lucide-react"

export function PublicMessageDrawer() {
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
                <div className="h-full overflow-y-scroll grow">

                </div>
            </SheetContent>
        </Sheet>
    )
}
