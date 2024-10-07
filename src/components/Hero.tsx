import Image from "next/image";
import Link from "next/link";
import PriceTag from "./PriceTag";

interface HeroPageProps {
  productid: string;
  title: string;
  description: string;
  img: string;
  price: number;
}

export default function HeroPage({
  productid,
  title,
  description,
  img,
  price,
}: HeroPageProps) {
  return (
    <div>
      <div className="h-screen flex items-center justify-center p-5 sm:flex-wrap">
        <div className="flex h-full max-h-[40rem] w-full max-w-[72remrem] overflow-hidden bg-card rounded-2xl shadow-md">
          <div className="w-full overflow-y-auto p-10 space-y-10 ">
            <div className="h-full flex flex-col items-start justify-center space-y-4   ">
              <h1 className="font-bold text-2xl">
                {title} 
                <PriceTag price={price} />
              </h1>

              <p className="text-muted-foreground text-sm line-clamp-3 md:line-clamp-none">
                {description}
              </p>
              <Image
                src={img}
                alt=""
                height={400}
                width={400}
                className="overflow-hidden object-cover md:hidden rounded-2xl"
              />
              <div className="my-4 mb-4">
                <Link
                  href={`/products/${productid}`}
                  className=" bg-yellow-400 px-6 py-2 rounded-2xl font-semibold"
                >
                  Check it Out
                </Link>
              </div>
            </div>
          </div>

          <Image
            src={img}
            alt={title}
            height={400}
            width={400}
            className="w-1/2 object-cover hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}
