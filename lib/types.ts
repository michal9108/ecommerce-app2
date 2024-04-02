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
  
