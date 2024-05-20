import { inventory } from "@/config/inventory"; // Import mock data
import { ProductGallery } from "@/components/product-gallery";
import { ProductInfo } from "@/components/product-info";
import ProductReviews from "@/components/product-reviews";
import SimiliarProducts from "@/components/product-similiar";
import TrendingList from "@/components/product-trending";

interface Props {
  params: {
    slug: string;
    categories: string[];
  };
}

export default function Page({ params }: Props) {
  const product = inventory.find((item) => item.slug === params.slug);

  const suggestedProducts = inventory.filter((item) => {
    console.log("Params Categories:", params.categories);
    console.log("Item Categories:", item.categories);
    console.log("Params:", params);

    // Check if any category in item is also in params.categories
    return item.categories && Array.isArray(item.categories) &&
           params.categories && Array.isArray(params.categories) &&
           item.categories.some(category => params.categories.includes(category));
  });

  console.log("suggestedProducts:", suggestedProducts);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Product */}
        <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          <ProductGallery product={product} /> <ProductInfo product={product} />
        </div>
        <ProductReviews />
        <TrendingList title="Related Items" items={suggestedProducts} />

        
      </div>
    </main>
  );
}
