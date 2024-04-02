import { Image } from "sanity"

export interface InventoryProduct {
  _id: string
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  slug: string
  sku: string
  _createdAt: Date
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    _id: "64da6006-a4bb-4555-af78-3467853eb75e",
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "g_trek_bumbag_1",
    slug: "g_trek_bumbag_1",
    name: "G Trek Bumbag",
    description: `Nylon travel bumbag. Adjustable strap. Silver-tone hardware. Reflective logo text at front. Zip closure at top.`,
    price: 65000, // price in smallest currency unit (e.g. cent for EUR)
    image:
      "https://lh3.googleusercontent.com/d/1ExsJgqwj1t5X1cr1IsOfeWmItuUDEd11",
    images: [
      "https://lh3.googleusercontent.com/d/1ExsJgqwj1t5X1cr1IsOfeWmItuUDEd11",
      "https://lh3.googleusercontent.com/d/1EzLk5nUDl2MOsE34li-IMGCaF3w3Cq5j",
      "https://lh3.googleusercontent.com/d/1EzPmmG0ricGazk52rNiVQ95VXmf76nDw",
    ],
    sizes: ["one-size"],
    categories: ["bags"],
    colors: ["black"],
    _createdAt: new Date("2017-01-24T00:00:00.000Z"),
    currency: "EUR",
  },
  {
    _id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "nuxx-quilted-backpack_1",
    slug: "nuxx-quilted-backpack_1",
    name: "Nuxx Quilted Backpack",
    description: `Quilted Econyl backpack. Zippered top closure. Zippered front pocket with a Econyl pull string. Leather patch with a gold stamped logo stitched on the front. Econyl lining. Laptop pocket and zippered compartment on the interior. Quilted back panel. Padded adjustable shoulder straps. `,
    price: 165000,
    image:
      "https://lh3.googleusercontent.com/d/1F-qfhC8bB1_sRymqi-VH_83nM3fxBjNL",
    images: [
      "https://lh3.googleusercontent.com/d/1F-qfhC8bB1_sRymqi-VH_83nM3fxBjNL",
      "https://lh3.googleusercontent.com/d/1F5ONgIvvcrtGRYTXdGah5f6Sx8Hp1yFb",
      "https://lh3.googleusercontent.com/d/1F5qQvFsBqbmxqgont3h9tqplu7kUD0sc",
    ],
    sizes: ["one-size"],
    categories: ["bags"],
    colors: ["black"],
    _createdAt: new Date("2017-01-24T00:00:00.000Z"),
    currency: "EUR",
  },
  {
    _id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    sku: "moto_logo_belt_1",
    slug: "moto_logo_belt_1",
    name: "Moto Logo Belt",
    description: `Calf leather belt. Silver-tone metal buckle. 3.5cm width.`,
    price: 4999,
    image:
      "https://lh3.googleusercontent.com/d/1F5z9wg2351NhFS3CmrMLoWlgelHpsxhb",
    images: [
      "https://lh3.googleusercontent.com/d/1F5z9wg2351NhFS3CmrMLoWlgelHpsxhb",
      "https://lh3.googleusercontent.com/d/1F6HGwKKjyZNhDbVyiBMvuLrmRkAXQBAR",
      "https://lh3.googleusercontent.com/d/1FIRkbV_CQ73KM-W8bdj6aswpb_seq8e-",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["belts"],
    colors: ["black"],
    _createdAt: new Date("2017-01-24T00:00:00.000Z"),
    currency: "EUR",
  },
  {
    _id: "6853a582-fc95-44af-9dac-dffbc694b47d",
    id: "6853a582-fc95-44af-9dac-dffbc694b47d",
    sku: "ySL_credit_card_hold_1",
    slug: "ySL_credit_card_hold_1",
    name: "YSL Credit Card Hold",
    description: `Leather card case. Gunmetal-tone logo plaque at front. Five credit card slots. Tonal stitching throughout.`,
    price: 35000,
    image:
      "https://lh3.googleusercontent.com/d/1F__FtHSIskWDkMfuIaABhVK45X8C8HSk",
    images: [
      "https://lh3.googleusercontent.com/d/1F__FtHSIskWDkMfuIaABhVK45X8C8HSk",
      "https://lh3.googleusercontent.com/d/1FSP9utUzg4hj10BKoFmnszVzLsUuXrNl",
      "https://lh3.googleusercontent.com/d/1FeHXhkVtWapVK05kXLlQkeLTOUibAKL6",
    ],
    sizes: ["one-size"],
    categories: ["wallets"],
    colors: ["black"],
    _createdAt: new Date("2017-01-24T00:00:00.000Z"),
    currency: "EUR",
  },
  {
    _id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
    id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
    sku: "knit_scarf_1",
    slug: "knit_scarf_1",
    name: "Knit Scarf",
    description: `Wool scarf. Check pattern all throughout. Large horizontal applique logo. Fringes at the ends.`,
    price: 42000,
    image:
      "https://lh3.googleusercontent.com/d1FKtbeiJAW4zHUJIwxm0UTYnMlKGjDSys",
    images: [
      "https://lh3.googleusercontent.com/d/1FKtbeiJAW4zHUJIwxm0UTYnMlKGjDSys",
    ],
    sizes: ["one-size"],
    categories: ["scarves"],
    colors: ["brown"],
    _createdAt: new Date("2017-01-24T00:00:00.000Z"),
    currency: "EUR",
  },
  {
    _id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "g-chain-necklace_1",
    slug: "g-chain-necklace_1",
    name: "G Chain Neklace",
    description: `Yellow gold necklace. G chainlink in polished and brushed metal. Invisible sliding clasp.`,
    price: 132300,
    image:
      "https://lh3.googleusercontent.com/d/1Feaoy2uEqPYn2yxi166imHfLyaqFH96f",
    images: [
      "https://lh3.googleusercontent.com/d/1Feaoy2uEqPYn2yxi166imHfLyaqFH96f",
      "https://lh3.googleusercontent.com/d/1FmXKThQmgRr2oPtEV51Ngus1uWxxJFda",
    ],
    sizes: ["one-size"],
    categories: ["neklaces"],
    colors: ["gold"],
    _createdAt: new Date("2017-01-24T00:00:00.000Z"),
    currency: "EUR",
  },
  {
    _id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
    id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
    sku: "Flatlist_Eyewear_1",
    slug: "Flatlist_Eyewear_1",
    name: "Flatlist Eyewear",
    description: `Mazzucchelli acetate frame sunglasses. Tinted lenses. Tapered acetate arms. Gold-tone hardware and hinges.`,
    price: 13999,
    image:
      "https://lh3.googleusercontent.com/d/1GIURo2xIRXAmkpzJ2iYxs-W6u8O42Owb",
    images: [
      "https://lh3.googleusercontent.com/d/1GIURo2xIRXAmkpzJ2iYxs-W6u8O42Owb",
      "https://lh3.googleusercontent.com/d/1GOCcaWVcgvb2S_Udvdyd7jHBmNlbCTXv",
      "https://lh3.googleusercontent.com/d/1GQjQWDUKEmIAq6bEGYJWSlbWVXshQFFQ",
    ],
    sizes: ["one-size"],
    categories: ["sunglasses"],
    colors: ["black"],
    _createdAt: new Date("2017-01-24T00:00:00.000Z"),
    currency: "EUR",
  },
  {
    _id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
    id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
    slug: "beetle-milky-amber_1",
    sku: "beetle-milky-amber_1",
    name: "Beetle Milky Amber Sunglasses",
    description: `Translucent Mazzucchelli acetate frame sunglasses. Gradient-tint shield lens with a lasered logo at the center . Thin acetate arms. Gold-tone hardware and hinges.`,
    price: 29000,
    image:
      "https://lh3.googleusercontent.com/d/1G0Kiggt2uDRiZWiAE4GrxLaTTGecRwlk",
    images: [
      "https://lh3.googleusercontent.com/d/1G0Kiggt2uDRiZWiAE4GrxLaTTGecRwlk",
      "https://lh3.googleusercontent.com/d/1G8Q6opIIcZMZwGaVoLc1aohzisd_fGD9",
      "https://lh3.googleusercontent.com/d/1GCp0tHsF3YajB2NXY2Ulz-iHnlNyRdy_",
    ],
    sizes: ["one-size"],
    categories: ["sunglasses"],
    colors: ["yellow"],
    _createdAt: new Date("2017-01-24T00:00:00.000Z"),
    currency: "EUR",
  },
  {
    _id: "dd27c79d-97c3-47bb-9172-4ea74b096f6f",
    id: "dd27c79d-97c3-47bb-9172-4ea74b096f6f",
    sku: "eyewear-hanky-tortoise_1",
    slug: "eyewear-hanky-tortoise_1",
    name: "Eyewear Hanky Tortoise",
    description: `Round acetate sunglasses. Tinted scratch-free UVA/UVB protected lenses. Stainless steel, nickel-free OBE hinges featuring silicone safety screws. Logo text at arm.`,
    price: 55000,
    image:
      "https://lh3.googleusercontent.com/d/1GUIX1FYb_wBBbXpPne6NvdcQtAgmm7QM",
    images: [
      "https://lh3.googleusercontent.com/d/1GUIX1FYb_wBBbXpPne6NvdcQtAgmm7QM",
      "https://lh3.googleusercontent.com/d/1GXQ5tSRpLE8cZcvzfyFXjuKiCNkqKH-V",
      "https://lh3.googleusercontent.com/d/1GcKHF4zM8G12NKp6KioVgMrOBhI7nlVh",
    ],
    sizes: ["one-size"],
    categories: ["sunglasses"],
    colors: ["brown"],
    _createdAt: new Date("2017-01-24T00:00:00.000Z"),
    currency: "EUR",
  },
  {
    _id: "dd27c79d-3423-47bb-9172-4ea74b096f6f",
    id: "dd27c79d-3423-47bb-9172-4ea74b096f6f",
    sku: "eyewear-hanky-tortoise_2",
    slug: "eyewear-hanky-tortoise_2",
    name: "Eyewear Hanky Tortoise2",
    description: `Round acetate sunglasses. Tinted scratch-free UVA/UVB protected lenses. Stainless steel, nickel-free OBE hinges featuring silicone safety screws. Logo text at arm.`,
    price: 55000,
    image:
      "https://lh3.googleusercontent.com/d/1GUIX1FYb_wBBbXpPne6NvdcQtAgmm7QM",
    images: [
      "https://lh3.googleusercontent.com/d/1GUIX1FYb_wBBbXpPne6NvdcQtAgmm7QM",
      "https://lh3.googleusercontent.com/d/1GXQ5tSRpLE8cZcvzfyFXjuKiCNkqKH-V",
      "https://lh3.googleusercontent.com/d/1GcKHF4zM8G12NKp6KioVgMrOBhI7nlVh",
    ],
    sizes: ["one-size"],
    categories: ["sunglasses"],
    colors: ["brown"],
    _createdAt: new Date("2017-01-24T00:00:00.000Z"),
    currency: "EUR",
  },
  {
    _id: "dd27c79d-43c3-47bb-9172-4ea74b096f6f",
    id: "dd27c79d-43c3-47bb-9172-4ea74b096f6f",
    sku: "eyewear-hanky-tortoise_3",
    slug: "eyewear-hanky-tortoise_3",
    name: "Eyewear Hanky Tortoise3",
    description: `Round acetate sunglasses. Tinted scratch-free UVA/UVB protected lenses. Stainless steel, nickel-free OBE hinges featuring silicone safety screws. Logo text at arm.`,
    price: 55000,
    image:
      "https://lh3.googleusercontent.com/d/1GUIX1FYb_wBBbXpPne6NvdcQtAgmm7QM",
    images: [
      "https://lh3.googleusercontent.com/d/1GUIX1FYb_wBBbXpPne6NvdcQtAgmm7QM",
      "https://lh3.googleusercontent.com/d/1GXQ5tSRpLE8cZcvzfyFXjuKiCNkqKH-V",
      "https://lh3.googleusercontent.com/d/1GcKHF4zM8G12NKp6KioVgMrOBhI7nlVh",
    ],
    sizes: ["one-size"],
    categories: ["sunglasses"],
    colors: ["brown"],
    _createdAt: new Date("2017-01-24T00:00:00.000Z"),
    currency: "EUR",
  },
  {
    _id: "dd27c79d-2342-47bb-9172-4ea74b096f6f",
    id: "dd27c79d-2342-47bb-9172-4ea74b096f6f",
    slug: "eyewear-hanky-tortoise_4",
    sku: "eyewear-hanky-tortoise_4",
    name: "Eyewear Hanky Tortoise4",
    description: `Round acetate sunglasses. Tinted scratch-free UVA/UVB protected lenses. Stainless steel, nickel-free OBE hinges featuring silicone safety screws. Logo text at arm.`,
    price: 55000,
    image:
      "https://lh3.googleusercontent.com/d/1GUIX1FYb_wBBbXpPne6NvdcQtAgmm7QM",
    images: [
      "https://lh3.googleusercontent.com/d/1GUIX1FYb_wBBbXpPne6NvdcQtAgmm7QM",
      "https://lh3.googleusercontent.com/d/1GXQ5tSRpLE8cZcvzfyFXjuKiCNkqKH-V",
      "https://lh3.googleusercontent.com/d/1GcKHF4zM8G12NKp6KioVgMrOBhI7nlVh",
    ],
    sizes: ["one-size"],
    categories: ["sunglasses"],
    colors: ["brown"],
    _createdAt: new Date("2017-01-24T00:00:00.000Z"),
    currency: "EUR",
  },
]
