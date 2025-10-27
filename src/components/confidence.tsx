import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Truck, Award, Clock, MessageCircle, CreditCard } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Autenticidade Verificada",
    description: "Inspeção técnica rigorosa + certificado digital em PDF para cada produto",
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Entrega Segura",
    description: "Frete assegurado, rastreamento completo e assinatura obrigatória",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Garantia Total",
    description: "Política clara de devolução de 7-30 dias com garantia completa",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Avaliação ao Vivo",
    description: "Videochamada com especialista para verificação antes da compra",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: "Suporte 24/7",
    description: "WhatsApp dedicado para atendimento personalizado e suporte técnico",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: "Pagamento Seguro",
    description: "Múltiplas formas de pagamento com segurança máxima e opção escrow",
  },
];

export function Confidence() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-luxury-lg text-black font-headline mb-4">COMPRA COM <span className="text-primary">CONFIANÇA</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Entrega segura, autenticidade garantida e suporte especializado. Sua tranquilidade é nossa prioridade máxima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-border hover:border-primary/30 transition-luxury p-6 text-center group shadow-card hover:shadow-luxury">
              <CardHeader className="p-0 mb-4 flex justify-center">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-luxury inline-block">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-luxury">{feature.title}</CardTitle>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white border border-border rounded-2xl p-8 text-center shadow-luxury">
          <h3 className="text-2xl font-bold text-black mb-4">Ainda tem dúvidas sobre a autenticidade?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Fale com nossos especialistas para avaliação ao vivo via WhatsApp ou videochamada. Verificação completa antes da sua decisão de compra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-success hover:bg-success/90 text-success-foreground">
              <Link href="https://wa.me/5562991593761?text=QUERO%20REALIZAR%20MINHA%20COMPRA%20!" target="_blank">
                <MessageCircle className="h-5 w-5 mr-2" />
                Falar com Especialista
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Ver Certificados de Exemplo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
