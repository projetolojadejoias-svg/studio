import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://i.imgur.com/mXFE99G.png"
        alt="Fundo de joias douradas"
        fill
        className="object-cover"
        style={{ backgroundAttachment: 'fixed' }}
        priority
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-6">
        <p className="text-base font-light tracking-widest uppercase mb-4 animate-fade-in [animation-delay:'200ms'] text-foreground">
          Coleção Exclusiva 2025
        </p>
        <h1 className="text-6xl md:text-8xl font-serif-display font-semibold mb-6 animate-fade-in [animation-delay:'400ms'] text-foreground">
          Russo Store
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:'600ms'] text-foreground">
          Joias e colares de Primeira Linha. Autenticidade verificada e elegância atemporal.
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
