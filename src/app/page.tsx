"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/hero";
import { TrendingProducts } from "@/components/trending-products";
import { QuickViewDrawer } from "@/components/quick-view-drawer";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { products } from "@/lib/products";

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const handleOpenQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div id="trending-products">
          <TrendingProducts onProductClick={handleOpenQuickView} />
        </div>
      </main>
      <Footer />
      <QuickViewDrawer
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={handleCloseQuickView}
      />
    </div>
  );
}
