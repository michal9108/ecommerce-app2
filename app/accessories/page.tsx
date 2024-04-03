import { inventory } from "@/config/inventory"; // Import mock data
import { cn } from "@/lib/utils";
import { ProductFilters } from "@/components/product-filters";
import { ProductGrid } from "@/components/product-grid";
import { ProductSort } from "@/components/product-sort";
import { SiteHero } from "@/components/site-hero";
import TrustSeals from "@/components/trust-seals";
import Newsletter from "@/components/ui/newsletter";

interface Props {
  searchParams: {
    date?: string;
    price?: string;
    color?: string;
    category?: string;
    size?: string;
    search?: string;
  };
}

export default function Accessories({ searchParams }: Props) {

  const { date = 'desc', price, color, category, size, search } = searchParams;

  let products = [...inventory];

  if (color) {
    products = products.filter(product => product.colors.includes(color));
  }
  if (category) {
    products = products.filter(product => product.categories.includes(category));
  }
  if (size) {
    products = products.filter(product => product.sizes.includes(size));
  }
  if (search) {
    const searchRegex = new RegExp(search, 'i');
    products = products.filter(product => searchRegex.test(product.name));
  }

  if (price && (price === 'asc' || price === 'desc')) {
    products.sort((a, b) => {
      return price === 'asc' ? a.price - b.price : b.price - a.price;
    });
  }

  if (date && (date === 'asc' || date === 'desc')) {
    products.sort((a, b) => {
      const dateA = new Date(a._createdAt).getTime();
      const dateB = new Date(b._createdAt).getTime();
      return date === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }

  return (
    <div>
      <SiteHero />
      <main className="mx-auto max-w-6xl px-6">
        <TrustSeals />
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
            {products.length} result{products.length === 1 ? "" : "s"}
          </h1>
          <ProductSort />
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <div
            className={cn(
              "grid grid-cols-1 gap-x-8 gap-y-10 ",
              products.length > 0 ? "lg:grid-cols-4" : "lg:grid-cols0[1fr_3fr]"
            )}
          >
            <div className="hidden lg:block">
              <ProductFilters />
            </div>
            <ProductGrid products={products} />
          </div>
        </section>
      </main>
      <Newsletter/>
    </div>
  )
}
