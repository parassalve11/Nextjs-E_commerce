'use server'

import { createCart, getCart } from "@/lib/cart"
import db from "@/lib/db";
import { revalidatePath } from "next/cache";


export async function incrementProductQuantity(productId : string){
const cart = (await getCart()) ?? (await createCart());

const articalInCart = cart.items.find((item) => item.productId === productId);

if(articalInCart){

    await db.cart.update({
        where:{id:cart.id},
        data:{
            items:{
                update:{
                    where:{
                        id:articalInCart.id
                    },
                    data:{
                        productId,
                        quantity:{increment:1}
                    }
                }
            }
        }
    })


    // await db.cartItem.update({
    //     where:{id:articalInCart.id},
    //     data:{
    //         cartId:cart.id,
    //         productId,
    //         quantity:{increment:1}
    //     }
    // });
}else{

        await db.cart.update({
            where:{id:cart.id},
            data:{
                items:{
                    create:{
                        productId,
                        quantity:1
                    }
                }
            }
        })

    //  await db.cartItem.create({
    //     data:{
    //         cartId:cart.id,
    //         productId,
    //         quantity:1
    //     }
    // })

};

revalidatePath('/products/[id]')

}