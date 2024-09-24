import ProductsCard from "@/components/ProductCard";
import db from "@/lib/db"


interface SearchPageProps{
    searchParams:{q:string}
};


export default async function SearchPage({searchParams:{q}}:SearchPageProps){
    const products = await db.product.findMany({
        where:{
            OR:[
                {name:{contains:q , mode:'insensitive'}},
                {description:{contains:q, mode:'insensitive'}}
            ]
        },
        orderBy:{id:'desc'}
    });

    if(products.length === 0){
        return <p className="h-96 font-semibold flex items-center justify-center text-xl">No Products found 👽<span className="animate-bounce">👌</span>.</p>
    }

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) =>(
                <ProductsCard products={product} key={product.id} />
            ))}
        </div>
    )
}