"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, XCircle } from "lucide-react"
import { formatCurrencyString } from "use-shopping-cart"

import {  InventoryProducts } from "../lib/types"
import { shimmer, toBase64 } from "@/lib/image"
import { Button } from "@/components/ui/button"
import ProductCard from "./product-card"
import ProductNotFound from "./product-notfound"




export function ProductGrid({ products }: InventoryProducts) {

  if (products.length === 0) {
    <ProductNotFound/>
  }

  return (
    <div className="relative grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8">
      {products.map((product) => (
       <ProductCard product={product}/>
      ))}
    </div>
  )
}
