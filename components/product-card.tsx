"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, XCircle } from "lucide-react"
import { formatCurrencyString } from "use-shopping-cart"

import { ProductCard } from "../lib/types"
import { shimmer, toBase64 } from "@/lib/image"
import { Button } from "@/components/ui/button"
import useOnMOuseOver from "./ui/use-onMouseOver"




function ProductCard({product}:ProductCard) {
  
  const { handleMouseOver, handleMouseout, productImages} = useOnMOuseOver()


  return (
    <Link
    key={product._id}
    href={`/products/${product.slug}`}
    className="group text-sm"
  >
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border-2 border-gray-200 bg-gray-100 group-hover:opacity-75 dark:border-gray-800">
        <Image
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(225, 280)
          )}`}
          src={productImages[product._id] || product.images[0]}
          onMouseOver={() => handleMouseOver(product._id)}
          onMouseOut={() => handleMouseout(product._id)}
          alt={product.name|| ""}
          width={225}
          height={280}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute right-1 top-1 m-2 ">
        <Heart color="#b91c1c" />
      </div>
      <div className="absolute bottom-1 left-1 m-2 flex items-center justify-center rounded-md bg-black p-1 text-xs font-bold text-white shadow-sm">
        <h5>20% OFF</h5>
      </div>
    </div>
    <div className="relative">
      <h3 className="mt-2 font-medium">{product.name}</h3>
      <div className="mt-2 flex">
        <p className="text-xl font-bold">
          {formatCurrencyString({
            currency: product.currency,
            value: product.price,
          })}
  
        </p>
        <p className="line-through">€560</p>
      </div>
      <div className="absolute right-0 top-0 flex items-center justify-center rounded-md bg-green-500 p-1 text-xs font-bold text-white shadow-sm">
        <h5>in stock</h5>
      </div>
     
      <div className="absolute right-0 top-6 mt-2 flex items-center justify-center rounded-md   text-xs font-bold text-black ">
        <p className=" text-sm font-medium text-foreground">⭐️4.2</p>
      </div>
    </div>
    <Button
      type="button"
      className="mt-2 w-full bg-yellow-500 py-6 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    >
      BUY NOW
    </Button>
  </Link>
  )
}

export default ProductCard;
