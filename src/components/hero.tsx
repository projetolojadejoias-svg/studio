import { Button } from "@/components/ui/button";
import { Shield, Truck, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const mascotImage = PlaceHolderImages.find(img => img.id === 'mascot');

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMC41IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-luxury-xl text-foreground font-headline leading-none">
                RUSSO STORE
                <span className="block text-primary">JOIAS & RELÓGIOS</span>
                <span className="block text-luxury-lg font-body font-light">de Primeira Linha</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Autenticidade verificada • Entrega segura e segurada • Compra discreta
              </p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>Autenticidade Verificada</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Truck className="h-5 w-5 text-primary" />
                <span>Entrega Segura</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Award className="h-5 w-5 text-primary" />
                <span>Garantia Total</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gold-gradient hover:scale-105 transition-luxury shadow-gold text-lg font-semibold px-8 h-11">
                Ver Coleção
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-luxury text-lg h-11">
                <Link href="https://wa.me/5562991593761?text=QUERO%20REALIZAR%20MINHA%20COMPRA%20!" target="_blank">
                  Comprar com Especialista
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {mascotImage && (
                <Image
                  src={mascotImage.imageUrl}
                  alt="Russo Store - Mascote oficial usando correntes de ouro"
                  width={512}
                  height={512}
                  data-ai-hint={mascotImage.imageHint}
                  className="w-full max-w-lg h-auto object-contain drop-shadow-2xl animate-fade-in"
                />
              )}
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
