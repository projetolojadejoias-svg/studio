import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, User, ShoppingBag, Menu } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-serif-display font-semibold tracking-tight text-foreground"
          >
            Russo Store
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-light text-foreground/80 hover:text-primary transition-colors pb-1">Home</Link>
            <Link href="#trending-products" className="text-sm font-light text-foreground/80 hover:text-primary transition-colors pb-1">Coleções</Link>
            <Link href="#confidence" className="text-sm font-light text-foreground/80 hover:text-primary transition-colors pb-1">Sobre</Link>
            <Link href="#footer" className="text-sm font-light text-foreground/80 hover:text-primary transition-colors pb-1">Contato</Link>
          </nav>

          {/* ICONS */}
          <div className="flex items-center gap-2">

            {/* Search */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
                <Search className="h-5 w-5" />
            </Button>

            {/* User */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile menu */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col gap-6 pt-10">
                        <Link href="/" className="text-lg font-medium text-foreground hover:text-primary transition-colors">Home</Link>
                        <Link href="#trending-products" className="text-lg font-medium text-foreground hover:text-primary transition-colors">Coleções</Link>
                        <Link href="#confidence" className="text-lg font-medium text-foreground hover:text-primary transition-colors">Sobre</Link>
                        <Link href="#footer" className="text-lg font-medium text-foreground hover:text-primary transition-colors">Contato</Link>
                    </div>
                </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
