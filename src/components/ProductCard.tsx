import { Product } from "@prisma/client";
import {
  Card,
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
     <Link href={`products/${products.id}`}>
<Card className="max-w-md overflow-hidden  bg-card rounded-2xl shadow-md space-y-2">
    {/* <CardHeader className="h-full"> */}
        <Image 
        src={products.imageUrl}
        alt={products.name}
        width={800}
        height={40}
        className="h-48 object-cover rounded-lg"
        />
    {/* </CardHeader> */}
    <CardContent className="px-3">
        <CardTitle className="font-bold text-md truncate">
            {products.name}
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground line-clamp-3">
            {products.description}
        </CardDescription>
    </CardContent>
    <CardFooter className="flex items-center justify-between">
        <PriceTag price={products.price} />
        {isNew && <Badge className="bg-yellow-400 text-purple-500">New</Badge>}
    </CardFooter>
</Card>
</Link>
  );
}
