import { Product } from "@prisma/client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";
import PriceTag from "./PriceTag";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  products: Product;
}

export default function ProductsCard({ products }: ProductCardProps) {
  const isNew =
    Date.now() - new Date(products.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;
  return (
    <Link href={`products/${products.id}`} className="">
      <Card className="max-w-md overflow-hidden rounded-2xl bg-card shadow-md">
        <CardHeader className="h-full">
          <Image
            src={products.imageUrl}
            alt="product_img"
            width={800}
            height={40}
            className=" h-48 object-cover rounded-2xl"
          />
        </CardHeader>
        <CardContent className="px-6 ">
          <CardTitle className="font-bold text-xl mb-1 truncate">
            {products.name}
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground  line-clamp-3">
            {products.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between ">
          <PriceTag price={products.price} />

          {isNew && (
            <Badge className="bg-yellow-400 hover:bg-yellow-400 text-purple-800 font-bold text-xs">
              New
            </Badge>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
