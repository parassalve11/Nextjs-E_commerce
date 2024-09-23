import SearchField from "@/components/SearchFiled";
import ShoppingCartButton from "@/components/ShoppingCartButton";
import UserButton from "@/components/UserButton";
import { getCart } from "@/lib/cart";
import db from "@/lib/db";

import Link from "next/link";




export default async function Navbar(){

    const cart = await getCart();
   
    
    return(
        <div className="sticky top-0 z-10 bg-card shadow-md">
            <div className="flex max-w-7xl mx-auto flex-wrap items-center justify-center px-5 py-3 gap-x-5">
                <Link href={'/'} className="text-primary font-bold text-3xl">Flowmezon</Link>
                <SearchField />
               
               <UserButton className="ms-0 md:ms-auto  " />
                {/* <ShoppingBasket /> */}
                <ShoppingCartButton  cart={cart} />
               
            </div>
           
        </div>
    )
}