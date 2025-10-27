import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-background/80 border-t border-border">
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
          <div className="flex flex-col md:flex-row gap-8">
            {/* Payment Methods */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground mb-4">Formas de Pagamento</h2>
              <div className="bg-background/80 p-4 rounded-lg border border-border">
                <div className="mb-4">
                  <Image src="https://cdn.sistemawbuy.com.br/img/bt-pgto-mercadopago.png" alt="Pague com Mercado Pago" width={120} height={30} className="h-auto" />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Image src="https://cdn.sistemawbuy.com.br/img/bandeiras/visa.png" alt="Visa" width={40} height={25} className="h-6 w-auto object-contain" />
                  <Image src="https://cdn.sistemawbuy.com.br/img/bandeiras/mastercard.png" alt="MasterCard" width={40} height={25} className="h-6 w-auto object-contain" />
                  <Image src="https://cdn.sistemawbuy.com.br/img/bandeiras/hipercard.png" alt="Hipercard" width={40} height={25} className="h-6 w-auto object-contain" />
                  <Image src="https://cdn.sistemawbuy.com.br/img/bandeiras/amex.png" alt="American Express" width={40} height={25} className="h-6 w-auto object-contain" />
                  <Image src="https://cdn.sistemawbuy.com.br/img/bandeiras/diners.png" alt="Diners" width={40} height={25} className="h-6 w-auto object-contain" />
                  <Image src="https://cdn.sistemawbuy.com.br/img/bandeiras/elo.png" alt="Elo" width={40} height={25} className="h-6 w-auto object-contain" />
                  <Image src="https://cdn.sistemawbuy.com.br/img/bandeiras/booklet.png" alt="Boleto" width={40} height={25} className="h-6 w-auto object-contain" />
                  <Image src="https://cdn.sistemawbuy.com.br/img/bandeiras/pix.png" alt="PIX" width={40} height={25} className="h-6 w-auto object-contain" />
                </div>
              </div>
            </div>

            {/* Security Seals */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground mb-4">Segurança</h2>
              <div className="bg-background/80 p-4 rounded-lg border border-border h-full flex items-center">
                <div className="flex items-center gap-4">
                  <Link href="https://www.google.com/safebrowsing/diagnostic?site=www.nacarpratas.com.br" rel="noopener noreferrer" target="_blank" title="Google Safe Browsing" className="transition-transform hover:scale-105">
                    <Image src="https://cdn.sistemawbuy.com.br/img/selos/google.png" alt="Google Safe Browsing" width={100} height={38} />
                  </Link>
                  <div className="w-px h-10 bg-border"></div>
                  <Link href="#" className="text-center transition-transform hover:scale-105" title="Ver avaliações">
                    <div className="flex items-center justify-center gap-1 font-bold text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"></path></svg>
                      <span>4.9</span>
                    </div>
                    <p className="text-xs text-muted-foreground m-0">8283 avaliações</p>
                  </Link>
                </div>
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
