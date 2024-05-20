import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"

import cardsIcons from "../app/assets/cardsIcons.png"
import FooterIcons from "./site-footer-icons"

export function SiteFooter() {
  return (
    <>
      <footer>
        <div className="mx-auto max-w-6xl overflow-hidden p-6 py-1 sm:py-5  lg:p-8">
          <FooterIcons />
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

          <Link
            href="https://www.fullstack.so"
            className=" block text-center text-xs leading-5"
          >
            &copy; {new Date().getFullYear()} {siteConfig.name} LLC. All rights
            reserved.
          </Link>
        </div>
      </footer>
    </>
  )
}
