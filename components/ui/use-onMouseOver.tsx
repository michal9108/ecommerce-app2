import { inventory } from '@/config/inventory';
import React, { useState } from 'react'

const useOnMOuseOver = () => {

    const initialImageStates: Record<string, string | undefined> = {};
  const [productImages, setProductImages] = useState<Record<string, string | undefined>>(initialImageStates);

  const handleMouseOver = (productId: string) => {
    setProductImages({
      ...productImages,
      [productId]: inventory.find(product => product._id === productId)?.images[1]
    });
  }

  const handleMouseout = (productId: string) => {
    setProductImages({
      ...productImages,
      [productId]: inventory.find(product => product._id === productId)?.images[0]
    });
  }
  return (
   {handleMouseOver, handleMouseout, productImages}
  )
}

export default useOnMOuseOver;
