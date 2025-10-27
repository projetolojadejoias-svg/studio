import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { ProductCard } from "./product-card";

export function TrendingProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-luxury-lg text-black font-headline mb-4">EM ALTA</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Peças selecionadas com autenticidade verificada e garantia total
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.slice(0, 12).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-11">
            Ver Toda a Coleção
          </Button>
        </div>
      </div>
    </section>
  );
}
