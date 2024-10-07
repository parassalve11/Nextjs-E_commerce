'use client'
import { ShoppingCart } from "@/lib/cart";
import {  ShoppingCartIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";
import db from "@/lib/db";
import { formatPrice } from "@/lib/format";
import { Button } from "./ui/button";



interface ShoppingCartButtonProps{
    cart:ShoppingCart | null ;
     
};

export default  function ShoppingCartButton({cart}:ShoppingCartButtonProps){

 function closeDropDownMenu(){
    const elem = document.activeElement as HTMLElement
    if(elem){
        elem.blur();
    }
 }

 
    return(
        <div className="relative flex items-center justify-center ">
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="">
                <ShoppingCartIcon className="size-6" />
                {Number(cart?.size )> 0 && <span className="absolute left-5 -top-1 font-bold text-[11px] rounded-full px-1   bg-yellow-300">{cart?.size}</span> }
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    there are total {cart?.size || 0} Items.
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href={'/'} >
                    
                  <DropdownMenuItem onClick={closeDropDownMenu}>

                        sasd
                  </DropdownMenuItem>
                   
                </Link>
                <DropdownMenuSeparator />
                <div className="text-muted-foreground  font-semibold text-sm"><span className="text-blue-500">Subtotal :</span> {formatPrice.format( Number(cart?.subtotal) * 83.89 || 0) }</div>
               <Link className="" href={'/cart'}> <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">View Cart</Button></Link>
            </DropdownMenuContent>
            
           </DropdownMenu>
        </div>
    )
}