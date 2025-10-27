import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-white">
      <div className="relative z-10 text-center px-6">
        <p className="text-base font-light tracking-widest uppercase mb-4 animate-fade-in [animation-delay:'200ms'] text-gray-500">
          Coleção Exclusiva 2025
        </p>
        <h1 className="text-6xl md:text-8xl font-serif-display font-semibold mb-6 animate-fade-in [animation-delay:'400ms'] text-black">
          Russo Store
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:'600ms'] text-gray-700">
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
