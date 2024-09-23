'use client'
import { CartItemwithProducts } from "@/lib/cart"
import { formatPrice } from "@/lib/format"
import { Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useTransition } from "react"


interface CartEntryProps{
    cartItem: CartItemwithProducts,
    setQuantity: (productId:string,quantity:number) => Promise<void>;
}

export default function CartEntry({cartItem:{product,quantity},setQuantity}:CartEntryProps){

    const[isPending,startTranstion] = useTransition();
    const[success,setSuccess] = useState(false);

    const quantityOptions : JSX.Element[] = [];
    for(let i = 1;i<=99;i++){
        quantityOptions.push(
            <option value={i} key={i}>
                {i}
            </option>
        )
    };

    
    return(
     
        <div className="h-64 flex items-center justify-center p-5">
            <div className="flex max-h-[20rem] h-full max-w-[64rem] w-full overflow-hidden bg-card rounded-2xl shadow-md">
            
            <Image 
                src={product.imageUrl}
                alt={product.name}
                height={200}
                width={200}
                className="w-1/3 rounded-2xl object-cover"
                />
           
                <div className="w-full overflow-y-auto p-10 space-y-10 ">
                    <div className="spacey-1 ">
                        <h1 className="font-bold text-lg">{product.name}</h1>
                        <hr className="w-full" />
                        <span>{formatPrice.format(Number(product.price) * 83.89)}</span>
                        <p className="text-muted-foreground text-[10px]">{product.description}</p>
                        <span className="font-bold text-sm">QTY : 
                            <select
                            className='border-2 px-2'
                            defaultValue={quantity}
                            onChange={(e) =>{
                                const newQuantity = parseInt(e.currentTarget.value);
                                setSuccess(false);
                                startTranstion(async() =>{
                                    await setQuantity(product.id,newQuantity);
                                    setSuccess(true);
                                    
                                });
                            }}
                            >
                                <option>
                                    0(remove item.)
                                </option>
                                {quantityOptions}
                            </select>
                        </span>
                     {isPending  &&    <Loader2 className="animate-spin size-5" />}
                     {success && <p>👽👍</p>}
                        
                    </div>
                   

                </div>
                    
            </div>
        </div>
     
    )
}