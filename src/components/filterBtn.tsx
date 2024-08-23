import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface filterButtonProps {
    name: string,
    className?: string
    type?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined

}


const FilterButton = ({ name, className, type }: filterButtonProps) => {
    return (
        <Button
            variant={type}
            className={cn('', className)}
        >
            {name}
        </Button>
    )
}

export default FilterButton;