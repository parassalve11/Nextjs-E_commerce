import { formatPrice } from "@/lib/format"
import { Badge } from "./ui/badge"
import { cn } from "@/lib/utils"


interface PriceTagProps{
    price:number ,
    className?:string
}

export default function PriceTag({price,className}:PriceTagProps){
    return (
        <Badge className={cn('px-4 py-1',className)}>{formatPrice.format(price * 83.89) }</Badge>
    )
}