/* eslint-disable @next/next/no-img-element */
import React from "react"
import Image from "next/image"

import { shimmer, toBase64 } from "@/lib/image"

import { Button } from "./ui/button"
import ProductCardBlockSection from "./product-card-block-section"
import CardBlock from "./product-card-block-section"
import ClothesImg from "../app/assets/block-section-clothes.webp";
import AccessoriesImg from "../app/assets/block-section-accessories.webp";


const CardsBlock = () => {
  return (
    <section aria-labelledby="category-heading" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
         

         <CardBlock title="Clothes" img={ClothesImg.src}/>
         <CardBlock  title="Accessories" img={AccessoriesImg.src}/>
        </div>
      </div>
    </section>
  )
}

export default CardsBlock
