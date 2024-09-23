import PriceTag from "@/components/PriceTag"
import db from "@/lib/db"
import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { cache } from "react"
import AddTOCartButton from "./AddtoCartButton"
import { incrementProductQuantity } from "./actions"


interface ProductInfoPageProps{
    params:{id:string}
};

const getProduct = cache( async(id:string) =>{
    const products = await db.product.findUnique({where:{id}});
    return products
});

export async function generateMetadata({params:{id}}:ProductInfoPageProps):Promise<Metadata>{
    const products = await getProduct(id);
    return{
        title: products?.name + '-Flowozon',
        description: products?.description,
        openGraph:{
            images:[{url:(products?.imageUrl) ?? ""}],
        }
    }
}

export default async function ProductInfoPage({
    params:{id}
}:ProductInfoPageProps){

   

  const products =   await getProduct(id);
 if(!products) return notFound();
    
    return(
        <div className="h-screen flex items-center justify-center p-5">
            <div className=" flex flex-col md:flex-row  w-full h-full  max-w-[72remrem] max-h-full md:max-h-[40rem] overflow-hidden rounded-2xl bg-card shadow-md">
               
                <Image 
                    src={products?.imageUrl}
                    alt={products?.name}
                    width={500}
                    height={800}
                    className="md:w-1/2 w-full h-full object-cover rounded-2xl  "
                    />

        <div className="w-full overflow-y-auto p-10 space-y-10 md:w-1/2 ">
                  <div className="space-y-1 ">
                        <h1 className="text-3xl font-bold">{products?.name}</h1>
                        <PriceTag className=" h-10 text-lg" price={Number(products?.price)} />
                        <p className="text-muted-foreground text-sm font-semibold">{products?.description}</p>
                    
                  </div>
                      <AddTOCartButton  productId={products.id} incrementProductQuantity={incrementProductQuantity} />
                </div>    
            </div>
           
        </div>
    )
}