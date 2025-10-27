"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, ShoppingCart, Shield } from "lucide-react";
import type { Product } from "@/lib/products";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const productImage = PlaceHolderImages.find(img => img.id === product.image);

  return (
    <Card className="group bg-white border-border hover:border-primary/50 transition-luxury overflow-hidden shadow-card hover:shadow-luxury">
      <div className="relative overflow-hidden">
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
          <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
            <Eye className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
          <Button asChild size="icon">
            <Link href="https://wa.me/5562991593761?text=QUERO%20REALIZAR%20MINHA%20COMPRA%20!" target="_blank">
              <ShoppingCart className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="absolute top-3 left-3 flex gap-2">
          {product.tags.map((tag, index) => (
            <Badge key={index} variant={tag.variant} className="flex items-center gap-1">
              {tag.variant === "success" && <Shield className="h-3 w-3" />}
              {tag.text}
            </Badge>
          ))}
        </div>
      </div>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-luxury">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">R$ {product.price}</span>
          </div>
          <Button asChild>
            <Link href="https://wa.me/5562991593761?text=QUERO%20REALIZAR%20MINHA%20COMPRA%20!" target="_blank">
              Comprar
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
