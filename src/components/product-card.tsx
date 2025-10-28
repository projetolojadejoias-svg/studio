"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Eye, ShoppingBag, X, Shield } from "lucide-react";
import type { Product } from "@/lib/products";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";
import { useCart } from "@/context/cart-context";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const productImage = PlaceHolderImages.find(img => img.id === product.image);
  const installmentValue = (parseFloat(product.price.replace(',', '.')) / 6).toFixed(2).replace('.', ',');
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const { addToCart } = useCart();

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      <Card className="group bg-background/80 border-border hover:border-primary/50 transition-luxury overflow-hidden shadow-card hover:shadow-luxury flex flex-col">
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
            <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white text-black" onClick={openLightbox}>
              <Eye className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {product.tags.map((tag, index) => (
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
            <Button className="w-full" onClick={handleAddToCart}>
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {isLightboxOpen && productImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in-fast"
          onClick={closeLightbox}
        >
          <div className="relative" onClick={e => e.stopPropagation()}>
            <Image
              src={productImage.imageUrl}
              alt={product.name}
              width={800}
              height={800}
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg"
            />
            <Button 
              size="icon" 
              variant="ghost" 
              className="absolute -top-4 -right-4 bg-background/50 hover:bg-background rounded-full h-10 w-10 text-white"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
