"use client"

import { useState } from "react"
import Link from "next/link"
import { Disclosure } from "@headlessui/react"
import { Label } from "@sanity/ui"
import { ArrowRight, Minus, Plus, StarIcon } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"
import { getSizeName } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Props {
  product: SanityProduct
}

export function ProductInfo({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const { addItem, cartDetails, incrementItem } = useShoppingCart()
  const { toast } = useToast()

  const isInCart = !!cartDetails?.[product._id]
  function addToCart() {
    const item = {
      ...product,
      product_data: {
        size: selectedSize,
      },
    }
    isInCart ? incrementItem(item._id) : addItem(item)
    toast({
      title: `${item.name} (${getSizeName(selectedSize)})`,
      description: "Product added to cart",
      action: (
        <Link href="/cart">
          <Button variant="link" className="gap-x-2 whitespace-nowrap">
            <span>Open cart</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      ),
    })
  }

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
  }
  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
      {/* Reviews */}
      <div className="mt-4">
        <h2 className="sr-only">Reviews</h2>
        <div className="flex items-center">
          <p className="text-base">
            3.9
            <span className="sr-only"> out of 5 stars</span>
          </p>
          <div className="ml-1 flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                fill="yellow"
                key={rating}
                className={classNames(
                  4.2 > rating ? "text-yellow-300" : "text-gray-200",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
          
          </div>
          <div className="ml-4 flex">
            <a
              href="#"
              className="text-sm font-medium text-yellow-600 hover:text-yellow-500"
            >
              See all 512 reviews
            </a>
          </div>
        </div>
      </div>
      {/* Color picker */}
      <div></div>
      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <div className="flex justify-between text-3xl tracking-tight">
          {formatCurrencyString({
            value: product.price,
            currency: product.currency,
          })}
        </div>
        <p className="text-xs line-through">€570</p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{product.description}</div>
      </div>

      <div className="mt-4">
        <p>
          Size: <strong>{getSizeName(selectedSize)}</strong>
        </p>
        {product.sizes.map((size) => (
          <Button
            onClick={() => setSelectedSize(size)}
            key={size}
            variant={selectedSize === size ? "default" : "outline"}
            className="mr-2 mt-4"
          >
            {getSizeName(size)}
          </Button>
        ))}
      </div>
      
      <div className="divide-y divide-gray-200 ">
      <form className="mt-6">
        <div className="mt-4 flex">
          <Button
            onClick={addToCart}
            type="button"
            className="w-full bg-yellow-500 py-6 text-lg font-semibold text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Add to cart
          </Button>
        </div>
      </form>
      <Disclosure as="div" key={product.name}>
          {({ open }) => (
            <>
              <h3>
                <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                  <span
                    className={classNames(
                      open ? "text-yellow-600" : "text-base",
                      "text-sm font-medium"
                    )}
                  >
                    Shipping & Returns
                  </span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <Minus
                        className="block h-6 w-6 text-yellow-400 group-hover:text-yellow-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <Plus
                        className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel
                as="div"
                className="prose prose-sm font-small pb-6 text-xs leading-loose "
              >
                <h3 className="text-foreground">Shipping</h3>
                <br></br>
                <p>A signature will be required upon delivery.</p>
                <p>
                  Pre-order, Made to Order items will ship on the estimated date
                  noted on the product description page. These items will ship
                  through Premium Express once they become available.
                </p>
                <br></br>
                <h3>Returns</h3>
                <br></br>

                <p>A signature will be required upon delivery.</p>
                <p>
                  Returns may be made by mail or in store. You may return items
                  by selecting Return this Item from your account under order
                  details, through your delivery confirmation email or by
                  contacting a Client Advisor. Once the request has been
                  approved, your prepaid shipping label will be emailed to you
                  or will be available for download in your account.
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" key={product.name}>
          {({ open }) => (
            <>
              <h3>
                <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                  <span
                    className={classNames(
                      open ? "text-yellow-600" : "text-base",
                      "text-sm font-medium"
                    )}
                  >
                    Materials & Care
                  </span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <Minus
                        className="block h-6 w-6 text-yellow-400 group-hover:text-yellow-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <Plus
                        className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel
                as="div"
                className="prose prose-sm font-small pb-6 text-xs leading-loose "
              >
                <h3>
                  Our products are made with carefully selected materials.
                  Please handle with care for longer product life.
                </h3>
                <br></br>
                <ul className="list-disc">
                  <li className="ml-4">
                    Protect from direct light, heat and rain. Should it become
                    wet, dry it immediately with a soft cloth
                  </li>
                  <li className="ml-4">
                    Store in the provided flannel bag or box
                  </li>
                  <li className="ml-4">Clean with a soft, dry cloth</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
