/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { formatCurrencyString } from "use-shopping-cart"

import { inventory } from "@/config/inventory"
import { shimmer, toBase64 } from "@/lib/image"

import { Button } from "./ui/button"
import { useState } from "react"
import { InventoryProduct } from "@/lib/types"
import useOnMOuseOver from "./ui/use-onMouseOver"


const products = inventory


export default function Example() {

const { handleMouseOver, handleMouseout, productImages} = useOnMOuseOver()

  return (
    <div className="bg-white">
      <div className=" sm:py-24 
     
     2xl:mx-auto 2xl:max-w-7xl 2xl:px-8
    
       ">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900  sm:px-8">
            Trending products
          </h2>
          <a
            href="#"
            className="text-black-600 hover:text-black-300  text-sm font-semibold sm:block sm:px-8 "
          >
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6 ">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8
                sm:mx-6 
              lg:mx-0 
               lg:gap-x-2
                lg:space-x-0
              "
            >
              {products.map((product) => (
                <Link
                  key={product._id}
                  href={`/products`}
                  className="inline-flex w-64 flex-col text-center "
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
                        alt={product.name || ""}
                        width={225}
                        height={280}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
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
                    <h3 className="mt-2 text-start font-medium">
                      {product.name}
                    </h3>
                    <div className="mt-2 flex">
                      <p className="text-xl font-bold">
                        {formatCurrencyString({
                          currency: product.currency,
                          value: product.price,
                        })}
                      </p>
                      <p className="line-through">€560</p>
                    </div>
                    <div className="absolute right-0 top-0 mt-2 flex items-center justify-center rounded-md bg-green-500 p-1 text-xs font-bold text-white shadow-sm">
                      <h5>in stock</h5>
                    </div>

                    <div className="absolute right-0 top-6 mt-2 flex items-center justify-center rounded-md   text-xs font-bold text-black ">
                      <p className=" text-sm font-medium text-foreground">
                        ⭐️4.2
                      </p>
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
            </ul>
          </div>
        </div>

        {/* <div className="mt-12 flex px-4 sm:hidden">
          <a
            href="#"
            className="text-black-600 hover:text-black-300  text-sm font-semibold sm:block"
          >
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div> */}
      </div>
    </div>
  )
}
