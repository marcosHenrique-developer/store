import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/data/api";
import { Product } from "@/data/types/products";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products", {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  const products = await response.json();

  return products;
}

export default async function HomeLoading() {
  const highlightedProduct = await getFeaturedProducts();

  return (
    <div className="grid max-h-[860px] grid-cols-3 grid-rows-3 gap-6">
      {highlightedProduct.map((product) => {
        return (
          <Skeleton
            key={product.id}
            className="bg-zinc-50/10 rounded-md col-span-1 row-span-3 h-[350px]"
          />
        );
      })}
    </div>
  );
}
