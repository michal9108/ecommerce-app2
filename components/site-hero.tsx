"use client"

import Image from "next/image"

import HeroMedium from "../app/assets/HeroRegularMedium.avif"

export function SiteHero() {
  return (
    <div className="relative isolate px-6 lg:px-8">
      <div className="absolute inset-0 m-auto h-full w-full ">
        <Image src={HeroMedium} fill objectFit="cover" alt="" />
      </div>

      <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Elevate Your Style
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover our exquisite collection of luxurious accessories crafted
            with precision and elegance.
          </p>
      
        </div>
      </div>
    </div>
  )
}
