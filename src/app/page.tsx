import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/hero";
import { TrendingProducts } from "@/components/trending-products";
import { Confidence } from "@/components/confidence";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrendingProducts />
        <Confidence />
      </main>
      <Footer />
    </div>
  );
}
