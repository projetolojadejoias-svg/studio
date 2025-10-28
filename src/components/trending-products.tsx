import { Button } from "@/components/ui/button";
import { products, Product } from "@/lib/products";
import { ProductCard } from "./product-card";

type TrendingProductsProps = {
  onProductClick: (product: Product) => void;
};

export function TrendingProducts({ onProductClick }: TrendingProductsProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-luxury-lg text-foreground font-headline mb-4">AS PEÇAS MAIS EM ALTA</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Peças selecionadas com autenticidade verificada e garantia total
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 mb-12">
          {products.slice(0, 12).map((product) => (
            <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
          ))}
        </div>

        <div className="text-center">
        </div>
      </div>
    </section>
  );
}
