"use server";

import { createCart, getCart } from "@/lib/cart";
import db from "@/lib/db";

export async function setQuantity(productId: string, quantity: number) {
  const cart = (await getCart()) ?? (await createCart());

  const articalInCart = cart.items.find((item) => item.productId === productId);

  if(quantity === 0){
    if(articalInCart){
        await db.cartItem.delete({
            where:{id:articalInCart.id}
        });
    }
  }else{
    if(articalInCart){
        await db.cartItem.update({
            where:{id:articalInCart.id},
            data:{
                quantity
            }
        })
    }else{
        await db.cartItem.create({
            data:{
                cartId:cart.id,
                productId,
                quantity:1
            }
        })
    }
  }
}
