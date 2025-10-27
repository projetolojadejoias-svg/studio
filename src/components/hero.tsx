import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-banner');

  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Coleção Russo Store 2025"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-base font-light tracking-widest uppercase mb-4 animate-fade-in [animation-delay:'200ms']">
          Coleção Exclusiva 2025
        </p>
        <h1 className="text-6xl md:text-8xl font-serif-display font-semibold mb-6 animate-fade-in [animation-delay:'400ms']">
          Russo Store
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:'600ms']">
          Joias e Relógios de Primeira Linha. Autenticidade verificada e elegância atemporal.
        </p>
        <Link href="#trending-products">
            <Button
              size="lg"
              className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90 transition-all duration-300 animate-fade-in [animation-delay:'800ms'] shadow-lg text-lg h-12 px-10"
            >
              Ver Coleção
            </Button>
        </Link>
      </div>
    </section>
  );
}
