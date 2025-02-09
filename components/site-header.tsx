"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Edit, Heart, ShoppingBag, User } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"

import BannerHeader from "./ui/banner-header"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleCart = () => setIsOpen(!isOpen)

  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { cartCount } = useShoppingCart()
  const defaultSearchQuery = searchParams.get("search") ?? ""

  if (pathname.startsWith("/studio")) return null

  function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchQuery = formData.get("search")
    router.replace(`?search=${searchQuery}`)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <BannerHeader />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-2 px-6 sm:space-x-0">
        <MainNav />
       
        <div className="flex items-center">
          <form
            onSubmit={onSubmit}
            className="hidden items-center lg:inline-flex"
          >
            <Input
              id="search"
              name="search"
              type="search"
              autoComplete="off"
              placeholder="Search products..."
              className="h-9 lg:w-[150px]"
              defaultValue={defaultSearchQuery}
            />
          </form>
          <Link href="">
            <Button size="sm" variant="ghost">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>

          <Link 
          href=""
          >
            <Button size="sm" variant="ghost">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/cart">
          <Button size="sm" variant="ghost" onClick={toggleCart}>
            <ShoppingBag className="h-5 w-5" />

            <span className="ml-2 text-sm font-bold">{cartCount}</span>
            <span className="sr-only">Cart</span>
          </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
