import Image from "next/image"
import {
  LucideProps,
  Moon,
  SunMedium,
  User,
  type Icon as LucideIcon,
} from "lucide-react"

import Logo from "../app/assets/Logo.44b83c01.svg"
export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  logo: (props: LucideProps) => (
    <div  className="h-20 w-20">
      <Image src={Logo} alt="Logo" />{" "}
    </div>
  ),
}
