'use client'

import { Button } from "@/components/ui/button"
import { Loader2, ShoppingCartIcon } from "lucide-react"
import { useState, useTransition } from "react"


interface AddTOCartButton{
    productId:string
    incrementProductQuantity: (productId:string) => Promise<void> 
}

export default function AddTOCartButton({productId , incrementProductQuantity}:AddTOCartButton){
    const[pending,startTranstion] = useTransition();
    const[success,setSuccess] = useState(false);
return(
   <div className="flex">
     <Button onClick={() =>{
        setSuccess(false);
        startTranstion(async() => {
            await incrementProductQuantity(productId);
            setSuccess(true);
        })
    }} 
    className="font-bold flex items-center gap-2"  variant={"outline"}>
          {pending ? <Loader2 className="size-5 animate-spin m-auto" /> :  <ShoppingCartIcon className="size-5" /> } Add to Cart
    </Button>
    { success && <p className="text-green-500">Added to cart.</p>}
   </div>
)
}