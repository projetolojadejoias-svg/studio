"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Eye, Heart, ShoppingCart, Shield } from "lucide-react";
import type { Product } from "@/lib/products";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const productImage = PlaceHolderImages.find(img => img.id === product.image);
  const installmentValue = (parseFloat(product.price.replace(',', '.')) / 6).toFixed(2).replace('.', ',');

  return (
    <Card className="group bg-background/80 border-border hover:border-primary/50 transition-luxury overflow-hidden shadow-card hover:shadow-luxury">
      <div className="relative overflow-hidden">
        {product.discount && (
          <span className="porc_desconto">-{product.discount}%</span>
        )}
        {productImage && (
          <Image
            src={productImage.imageUrl}
            alt={product.name}
            width={400}
            height={400}
            data-ai-hint={productImage.imageHint}
            className="w-full h-64 object-cover group-hover:scale-110 transition-luxury"
          />
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-luxury flex items-center justify-center gap-3">
          <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white text-black">
            <Eye className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white text-black">
            <Heart className="h-4 w-4" />
          </Button>
          <Button asChild size="icon">
            <Link href="https://wa.me/5562991593761?text=QUERO%20REALIZAR%20MINHA%20COMPRA%20!" target="_blank">
              <ShoppingCart className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {product.tags.filter(tag => tag.text !== 'Certificado').map((tag, index) => (
            <Badge key={index} variant={tag.variant} className="flex items-center gap-1">
              {tag.variant === "success" && <Shield className="h-3 w-3" />}
              {tag.text}
            </Badge>
          ))}
        </div>
      </div>
      <CardContent className="p-4 space-y-3 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-luxury">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>
        <div className="space-y-3">
          <div className="mt-2">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-xl font-bold text-primary">R$ {product.price}</span>
              {product.originalPrice && (
                <s className="text-sm text-muted-foreground opacity-70">
                  R$ {product.originalPrice}
                </s>
              )}
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <CreditCard className="h-3 w-3" />
              6x de R$ {installmentValue} sem juros
            </p>
          </div>
          <Button asChild className="w-full">
            <Link href="https://wa.me/5562991593761?text=QUERO%20REALIZAR%20MINHA%20COMPRA%20!" target="_blank">
              Comprar
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
