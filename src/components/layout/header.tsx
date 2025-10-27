import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetFooter, SheetClose } from "@/components/ui/sheet";
import { Search, User, ShoppingBag, Menu, Heart, X, ChevronDown, Instagram, Facebook, MessageCircle, Truck, Star } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { products } from "@/lib/products";
import { Input } from "@/components/ui/input";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function Header() {
  const cartItems = products.slice(0, 2);
  const subtotal = cartItems.reduce((acc, product) => acc + parseFloat(product.price.replace(',', '.')), 0);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      {/* Top Bar */}
      <div className="bg-card/50 border-b border-border">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-10">
          <div className="flex items-center gap-3">
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-4 w-4 text-muted-foreground hover:text-primary transition-luxury" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-4 w-4 text-muted-foreground hover:text-primary transition-luxury" />
            </Link>
            <Link href="https://wa.me/5562991593761?text=QUERO%20REALIZAR%20MINHA%20COMPRA%20!" target="_blank" aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4 text-muted-foreground hover:text-primary transition-luxury" />
            </Link>
          </div>
          <div className="text-xs text-muted-foreground hidden md:block">
            Autenticidade Verificada & Entrega Segura em Todo o Brasil
          </div>
          <div>
            <Button variant="ghost" size="sm" className="text-xs h-auto py-1 px-2 text-muted-foreground hover:text-primary hover:bg-primary/10">
              <Truck className="h-4 w-4 mr-2" />
              Rastrear Pedido
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0">
                <SheetHeader className="p-6 border-b border-border">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="colecoes">
                      <AccordionTrigger>Coleções</AccordionTrigger>
                      <AccordionContent className="pl-4">
                        <Link href="#" className="block py-2 text-muted-foreground hover:text-primary">Relógios de Luxo</Link>
                        <Link href="#" className="block py-2 text-muted-foreground hover:text-primary">Correntes de Ouro</Link>
                        <Link href="#" className="block py-2 text-muted-foreground hover:text-primary">Pulseiras Premium</Link>
                      </AccordionContent>
                    </AccordionItem>
                    <Link href="#confidence" className="block py-4 font-medium hover:underline">Sobre</Link>
                    <Link href="#footer" className="block py-4 font-medium hover:underline">Contato</Link>
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Search */}
            <div className="hidden md:flex relative">
              <Input placeholder="O que você procura?" className="w-64 lg:w-80 pr-10" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl lg:text-3xl font-serif-display font-semibold tracking-tight text-foreground absolute left-1/2 -translate-x-1/2"
          >
            Russo Store
          </Link>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md p-0 flex flex-col">
                <SheetHeader className="p-6 border-b border-border">
                  <SheetTitle>Meu Carrinho</SheetTitle>
                </SheetHeader>
                
                {cartItems.length > 0 ? (
                  <>
                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                      {cartItems.map(item => (
                        <div key={item.id} className="flex gap-4">
                          <div className="w-20 h-20 rounded-md overflow-hidden bg-muted">
                             <Image src={PlaceHolderImages.find(img => img.id === item.image)?.imageUrl || ''} alt={item.name} width={80} height={80} className="object-cover"/>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">R$ {item.price}</p>
                          </div>
                           <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>

                    <SheetFooter className="p-6 border-t border-border space-y-4">
                      <div className="flex justify-between font-semibold">
                        <span>Subtotal</span>
                        <span>R$ {subtotal.toFixed(2).replace('.',',')}</span>
                      </div>
                      <Button asChild size="lg" className="w-full">
                         <Link href="https://wa.me/5562991593761?text=QUERO%20FINALIZAR%20MINHA%20COMPRA%20!" target="_blank">Finalizar Compra</Link>
                      </Button>
                       <Button variant="outline" className="w-full">Continuar Comprando</Button>
                    </SheetFooter>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                      <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4"/>
                      <h3 className="font-semibold text-lg mb-2">Seu carrinho está vazio</h3>
                      <p className="text-muted-foreground text-sm mb-4">Adicione produtos para continuar.</p>
                      <SheetClose asChild>
                        <Button>Ver produtos</Button>
                      </SheetClose>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <nav className="hidden md:flex container mx-auto px-6 md:px-12 items-center justify-center h-12 gap-8 border-b border-border">
        <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Home</Link>
        <Link href="#trending-products" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Coleções</Link>
        <Link href="#confidence" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Sobre</Link>
        <Link href="#footer" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Contato</Link>
      </nav>
    </header>
  );
}
