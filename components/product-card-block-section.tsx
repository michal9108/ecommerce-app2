import { StaticImageData } from 'next/image';
import React from 'react'
import { Button } from './ui/button'


 interface CardBlockType  {
    title:string;
    img:string
}

export default function  CardBlock({title, img}:CardBlockType) {
    
  return (
    <div className="aspect-h-1 aspect-w-2 sm:aspect-h-1 sm:aspect-w-1 group overflow-hidden rounded-lg sm:row-span-2">
    <img
      src={img}
      alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
      className="object-cover object-center group-hover:opacity-75"
    />
    <div
      aria-hidden="true"
      className="bg-gradient-to-b from-transparent to-black opacity-50"
    />
    <div className="flex items-end p-6">
      <Button
        type="button"
        className="mt-2 w-full bg-yellow-500 py-6 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        {title}
      </Button>
    </div>

  </div>
  )
}
