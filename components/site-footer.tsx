import Link from "next/link"

import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl overflow-hidden p-6 py-12 sm:py-20 lg:p-8">
        <nav
          className="mb-6 columns-2 sm:flex sm:justify-center sm:space-x-10"
          aria-label="Footer"
        >
          {siteConfig.footer.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <div className="my-6 block text-center text-xs leading-5">
          LLC. All rights reserved.
        </div>
        </div>


        <Link
          href="https://www.fullstack.so"
          className=" block text-center text-xs leading-5"
        >
          &copy; {new Date().getFullYear()} {siteConfig.name} LLC. All rights
          reserved.
        </Link>
      </div>
    </footer>
  )
}
