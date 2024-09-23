import { CartWithProducts } from "@/lib/cart"
import db from "@/lib/db"


interface ItmesCardProps{
    cartItems:CartWithProducts
}

export default async function ItemsCard({cartItems}:ItmesCardProps){

    const cartItem = await db.cartItem.findUnique({
        where:{
            id:cartItems.id
        },
        include:{
            product:{
              select:{
                name:true,
                imageUrl:true,
                price:true
              }
            }
        }
    })
    return(
        <div>
            {cartItem?.product.name}
        </div>
    )
}