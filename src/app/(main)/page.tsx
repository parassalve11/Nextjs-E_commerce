import HeroPage from "@/components/Hero";
import PaginationBar from "@/components/PaginationBar";
import ProductsCard from "@/components/ProductCard";
import db from "@/lib/db";


interface HomeProps{
  searchParams:{page:string}
}


export default async function Home({searchParams:{page='1'}}:HomeProps) {

const currentPage = parseInt(page);

const pageSize =8;
const heroItemCount = 1;

const toatlItemCount = await db.product.count();

const totalPages = Math.ceil((toatlItemCount - heroItemCount) / pageSize);



const products = await db.product.findMany({
  orderBy:{id:'desc'},
  skip:(currentPage - 1) * pageSize + ( currentPage === 1 ? 0 : heroItemCount),
  take: pageSize + (currentPage === 1 ? heroItemCount : 0),
})
if(products.length <= 0){
return <div className="h-96 flex items-center justify-center font-semibold text-2xl">No Products are Found 👽👌.</div>
}

  return (
   <div className="flex flex-col items-center justify-center">
   {currentPage === 1 &&  <HeroPage productid={products[0].id} title={products[0].name} description={products[0].description} img={products[0].imageUrl} price={products[0].price} />}
   {products.length > 0 ?  <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-4 mt-4">
      {(currentPage === 1 ? products.slice(1) : products).map((product) =>(
        <ProductsCard products={product} key={product.id} />
      ))}

    </div> : <p>No Produects are avaliable 👽👌.</p>}
    {products.length > 8 && totalPages && <PaginationBar currentPage={currentPage} totalPage={totalPages} />}
   </div>
  );
}
