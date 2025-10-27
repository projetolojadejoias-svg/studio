import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, ShoppingBag, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-headline font-black text-primary">RS</div>
              <span className="ml-2 text-sm font-body font-medium text-foreground hidden sm:inline">RUSSO STORE</span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar relógios, correntes, pingentes..."
                className="pl-10 bg-input border-border focus:ring-primary"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
              <Link href="#" className="text-foreground hover:text-primary transition-luxury">Relógios</Link>
              <Link href="#" className="text-foreground hover:text-primary transition-luxury">Correntes</Link>
              <Link href="#" className="text-foreground hover:text-primary transition-luxury">Pingentes</Link>
            </div>
            
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary px-2 sm:px-3">
              <User className="h-5 w-5" />
              <span className="ml-2 hidden sm:inline">Entrar</span>
            </Button>

            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary relative px-2 sm:px-3">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Button>

            <Button asChild size="sm" className="bg-success hover:bg-success/90 text-success-foreground px-2 sm:px-3">
              <Link href="https://wa.me/5562991593761?text=QUERO%20REALIZAR%20MINHA%20COMPRA%20!" target="_blank">
                <MessageCircle className="h-4 w-4" />
                <span className="ml-2 hidden sm:inline">WhatsApp</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
