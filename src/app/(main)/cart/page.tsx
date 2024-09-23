import { getCart } from "@/lib/cart"
import CartEntry from "./CartEntry";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/format";
import { setQuantity } from "./actions";


export default async function CartPage(){
    const cart =  await getCart();
    return(
        <div className="h-screen" >
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            {cart?.items.map((cartItems) =>(
                <CartEntry cartItem={cartItems} key={cart.id}  setQuantity={setQuantity}/>
            ))}
            <Separator />
            <div className="flex items-center justify-end gap-x-6">
                <p> <span className="font-semibold text-yellow-700">Items :</span> {cart?.size}</p>,
                <span className="flex gap-2"><p className="font-semibold text-blue-500">Subtotal :</p>{formatPrice.format(Number(cart?.subtotal || 0 ) * 83.89)}</span>
            </div>
        </div>
    )
}