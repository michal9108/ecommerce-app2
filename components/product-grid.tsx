"use client"

import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { Heart, XCircle } from "lucide-react"
import { formatCurrencyString } from "use-shopping-cart"

import { InventoryProduct } from "@/config/inventory"
import { shimmer, toBase64 } from "@/lib/image"
import { Button } from "@/components/ui/button"

// import { SanityProductProps } from "@/lib/types"

interface Props {
  products: InventoryProduct[]
}

export function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="relative grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
      {products.map((product) => (
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
                src={product.images[0]}
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
              <p className="text-lg font-bold">
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
      ))}
    </div>
  )
}
