import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram, MessageCircle, Mail, Shield, CreditCard, Truck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-headline font-black text-primary">RS</div>
              <span className="text-lg font-body font-bold text-foreground">RUSSO STORE</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Joias e relógios de primeira linha com autenticidade verificada, entrega segura e garantia total.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Produtos</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-luxury">Relógios de Luxo</Link></li>
              <li><Link href="#" className="hover:text-primary transition-luxury">Correntes de Ouro</Link></li>
              <li><Link href="#" className="hover:text-primary transition-luxury">Pulseiras Premium</Link></li>
              <li><Link href="#" className="hover:text-primary transition-luxury">Pingentes Exclusivos</Link></li>
              <li><Link href="#" className="hover:text-primary transition-luxury">Rolex Submariner</Link></li>
              <li><Link href="#" className="hover:text-primary transition-luxury">Bvlgari Collection</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Suporte</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-luxury">Central de Ajuda</Link></li>
              <li><Link href="#" className="hover:text-primary transition-luxury">Política de Garantia</Link></li>
              <li><Link href="#" className="hover:text-primary transition-luxury">Política de Devolução</Link></li>
              <li><Link href="#" className="hover:text-primary transition-luxury">Certificados de Autenticidade</Link></li>
              <li><Link href="#" className="hover:text-primary transition-luxury">Rastreamento de Pedido</Link></li>
              <li><Link href="#" className="hover:text-primary transition-luxury">Fale com Especialista</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contato</h3>
            <div className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start border-success text-success hover:bg-success hover:text-success-foreground">
                <Link href="https://wa.me/5562991593761?text=QUERO%20REALIZAR%20MINHA%20COMPRA%20!" target="_blank">
                  <MessageCircle className="h-4 w-4 mr-2" />WhatsApp
                </Link>
              </Button>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Atendimento 24/7</p>
                <p>Especialistas certificados</p>
                <p>Avaliação ao vivo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-border">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-success" />
                <span>SSL Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-4 w-4 text-primary" />
                <span>PCI Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-4 w-4 text-primary" />
                <span>Entrega Assegurada</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span>Aceitamos:</span>
              <div className="flex space-x-2">
                <div className="px-2 py-1 bg-card border border-border rounded text-xs font-medium">PIX</div>
                <div className="px-2 py-1 bg-card border border-border rounded text-xs font-medium">Visa</div>
                <div className="px-2 py-1 bg-card border border-border rounded text-xs font-medium">Master</div>
                <div className="px-2 py-1 bg-card border border-border rounded text-xs font-medium">Boleto</div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Russo Store. Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:text-primary transition-luxury">Termos de Uso</Link>
            <Link href="#" className="hover:text-primary transition-luxury">Política de Privacidade</Link>
            <Link href="#" className="hover:text-primary transition-luxury">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
