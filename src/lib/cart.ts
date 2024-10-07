import { cookies } from "next/headers";
import db from "./db";
import { Cart, Prisma } from "@prisma/client";
import { validRequest } from "@/auth";

export type CartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type CartItemwithProducts = Prisma.CartItemGetPayload<{
  include:{product:true}
}>;

export type ProductsWithCartItems = Prisma.ProductGetPayload<{
  include:{CartItem:{select:{quantity:any}}}
}>

export type ShoppingCart = CartWithProducts & {
  size: number;
  subtotal: number;
};

export async function getCart(): Promise<ShoppingCart | null> {
  const localCartId = cookies().get("localCardId")?.value;

  const session  = await validRequest();

  let cart : CartWithProducts | null = null;

  if(session){

    cart = await db.cart.findFirst({
      where:{userId: session.user?.id},
      include:{
        items:{
          include:{
            product:true
          }
        }
      }
    })

  }else{
     cart = localCartId
    ? await db.cart.findUnique({
        where: {
          id: localCartId,
        },
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      })
    : null;
  }

  

  if (!cart) {
    return null;
  }

  return {
    ...cart,
    size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
    subtotal: cart.items.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0
    ),
  };
}

export async function createCart(): Promise<ShoppingCart> {

  const session = await validRequest();

  let newCart : Cart ;

  if(session){
    newCart = await db.cart.create({
      data:{userId:session.user?.id}
    })

  }else{
     newCart = await db.cart.create({
      data: {},
    });
    
  }
 

  //   Note: it needs Encryption as well as Secure setting when we make this app into Production ,
  //   without it user can get the cookies adn later he/she can edit our frontend.

  cookies().set("localCardId", newCart.id);

  return {
    ...newCart,
    items: [],
    size: 0,
    subtotal: 0,
  };
}
