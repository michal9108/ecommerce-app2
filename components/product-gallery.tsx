"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"

import { InventoryProduct } from "../lib/types"
import { shimmer, toBase64 } from "@/lib/image"

interface Props {
  product: InventoryProduct
}

export function ProductGallery({ product }: Props) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="flex flex-col-reverse">
      {/* Image Grid */}
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <ul className="grid grid-cols-4 gap-6">
          {product.images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase hover:bg-gray-50"
            >
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <Image
                  src={image}
                  width={200}
                  height={200}
                  alt=""
                  className="h-full w-full object-cover object-center"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(200, 200)
                  )}`}
                />
              </span>
              {index === selectedImage && (
                <span
                  className="pointer-events-none absolute inset-0 rounded-md ring-4 ring-yellow-500 ring-offset-2"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className="relative">
        {/* Main Image */}
        <div className="aspect-h-1 aspect-w-1 w-full">
          <Image
            priority
            src={product.images[selectedImage]}
            alt={`Main ${product.name} image`}
            width={600}
            height={750}
            className="h-full w-full border-2 border-gray-200 object-cover object-center shadow-sm dark:border-gray-800 sm:rounded-lg"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(600, 750)
            )}`}
          />
        </div>
        <div className="absolute right-1 top-1 m-2 ">
          <Heart size={45} color="#b91c1c" />
        </div>
      </div>
    </div>
  )
}
