import { inventory } from "@/config/inventory"; // Import mock data
import { ProductGallery } from "@/components/product-gallery";
import { ProductInfo } from "@/components/product-info";
import ProductReviews from "@/components/product-reviews";
import SimiliarProducts from "@/components/product-similiar";

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  const product = inventory.find((item) => item.slug === params.slug);

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
        <SimiliarProducts />
      </div>
    </main>
  );
}
