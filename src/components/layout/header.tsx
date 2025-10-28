"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Search, User, ShoppingBag, Menu, Heart, X, Instagram, Facebook, MessageCircle, Truck } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { SheetClose } from "@/components/ui/sheet";
import { useCart } from "@/context/cart-context";

export function Header() {
  const { cartItems, removeFromCart } = useCart();
  const subtotal = cartItems.reduce((acc, product) => acc + parseFloat(product.price.replace(',', '.')), 0);

  return (
    <header className="sticky top-0 z-50 bg-[#0D0D0F] text-white">
      {/* Top Bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-10">
          <div className="flex items-center gap-3">
            <Link href="https://www.instagram.com/russo_stor/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-4 w-4 text-white/60 hover:text-primary transition-luxury" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-4 w-4 text-white/60 hover:text-primary transition-luxury" />
            </Link>
            <Link href="https://wa.me/5562991593761?text=QUERO%20REALIZAR%20MINHA%20COMPRA%20!" target="_blank" aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4 text-white/60 hover:text-primary transition-luxury" />
            </Link>
          </div>
          <div className="text-xs text-white/60 hidden md:block">
            Autenticidade Verificada & Entrega Segura em Todo o Brasil
          </div>
          <div>
            
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0 bg-[#0D0D0F] text-white border-r-white/20">
                <SheetHeader className="p-6 border-b border-white/10">
                  <SheetTitle className="text-white">Menu</SheetTitle>
                </SheetHeader>
                <div className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="colecoes" className="border-b-white/10">
                      <AccordionTrigger className="hover:no-underline">Coleções</AccordionTrigger>
                      <AccordionContent className="pl-4">
                        <Link href="#" className="block py-2 text-white/70 hover:text-primary">Relógios de Luxo</Link>
                        <Link href="#" className="block py-2 text-white/70 hover:text-primary">Correntes de Ouro</Link>
                        <Link href="#" className="block py-2 text-white/70 hover:text-primary">Pulseiras Premium</Link>
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
              <Input placeholder="O que você procura?" className="w-64 lg:w-80 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:ring-primary" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
            </div>
          </div>

          {/* Logo */}
          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-50"
            aria-label="Russo Store"
          >
            <img
              src="https://i.imgur.com/dOQhqsY.png"
              alt="Russo Store Logo"
              className="logo-russo-store"
              loading="lazy"
              decoding="async"
            />
          </a>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex text-white hover:bg-white/10">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex text-white hover:bg-white/10">
              <User className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10">
                  <ShoppingBag className="h-5 w-5" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md p-0 flex flex-col bg-[#0D0D0F] text-white border-l-white/20">
                <SheetHeader className="p-6 border-b border-white/10">
                  <SheetTitle className="text-white">Meu Carrinho</SheetTitle>
                </SheetHeader>
                
                {cartItems.length > 0 ? (
                  <>
                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                      {cartItems.map(item => (
                        <div key={item.id} className="flex gap-4">
                          <div className="w-20 h-20 rounded-md overflow-hidden bg-white/10">
                             <Image src={PlaceHolderImages.find(img => img.id === item.image)?.imageUrl || ''} alt={item.name} width={80} height={80} className="object-cover"/>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm text-white">{item.name}</h4>
                            <p className="text-sm text-white/70">R$ {item.price}</p>
                          </div>
                           <Button variant="ghost" size="icon" className="w-8 h-8 text-white/70 hover:bg-white/10" onClick={() => removeFromCart(item.id)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>

                    <SheetFooter className="p-6 border-t border-white/10 space-y-4 bg-[#0D0D0F]">
                      <div className="flex justify-between font-semibold">
                        <span>Subtotal</span>
                        <span>R$ {subtotal.toFixed(2).replace('.',',')}</span>
                      </div>
                      <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                         <Link href="https://wa.me/5562991593761?text=QUERO%20FINALIZAR%20MINHA%20COMPRA%20!" target="_blank">Finalizar Compra</Link>
                      </Button>
                       <Button asChild variant="outline" className="w-full text-white border-white/30 hover:bg-white/10">
                         <SheetClose>Continuar Comprando</SheetClose>
                       </Button>
                    </SheetFooter>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                      <ShoppingBag className="h-16 w-16 text-white/20 mb-4"/>
                      <h3 className="font-semibold text-lg mb-2">Seu carrinho está vazio</h3>
                      <p className="text-white/60 text-sm mb-4">Adicione produtos para continuar.</p>
                      <SheetClose asChild>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Ver produtos</Button>
                      </SheetClose>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <nav className="hidden md:flex container mx-auto px-6 md:px-12 items-center justify-center h-12 gap-8">
        <Link href="#trending-products" className="text-sm font-medium text-white/80 hover:text-primary transition-colors">Coleções</Link>
        <Link href="#footer" className="text-sm font-medium text-white/80 hover:text-primary transition-colors">Sobre</Link>
        <Link href="#footer" className="text-sm font-medium text-white/80 hover:text-primary transition-colors">Contato</Link>
      </nav>
    </header>
  );
}
