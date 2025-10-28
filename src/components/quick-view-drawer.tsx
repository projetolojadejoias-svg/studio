"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";

interface QuickViewDrawerProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function QuickViewDrawer({ product, isOpen, onClose }: QuickViewDrawerProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);
  
  useEffect(() => {
    if (product && product.sizes) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  if (!product) {
    return null;
  }

  const mainImage = PlaceHolderImages.find(img => img.id === product.image);
  const economy = product.originalPrice ? (parseFloat(product.originalPrice.replace(',', '.')) - parseFloat(product.price.replace(',', '.'))).toFixed(2).replace('.', ',') : '0,00';

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };
  
  const handleBuyNow = () => {
    handleAddToCart();
    window.open('https://wa.me/5562991593761?text=QUERO%20FINALIZAR%20MINHA%20COMPRA%20!', '_blank');
  }

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
      <div className="drawer-overlay" onClick={onClose}></div>
      <div className={cn("drawer-content", {"active": isOpen})}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
        >
          <X size={24} />
        </button>

        <div className="h-full overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 h-full">
            {/* Image Gallery */}
            <div className="md:col-span-2 bg-black flex items-center justify-center p-4">
              {mainImage && (
                <Image
                  src={mainImage.imageUrl}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-contain w-full h-auto max-h-96 md:max-h-full"
                />
              )}
            </div>

            {/* Product Info */}
            <div className="md:col-span-3 p-8 flex flex-col">
              <h2 className="text-2xl font-bold font-serif-display text-[#d4af37]">
                {product.name}
              </h2>

              <div className="flex items-center gap-4 mt-4">
                <span className="text-3xl font-bold">R$ {product.price}</span>
                {product.originalPrice && (
                  <s className="text-lg text-gray-400">R$ {product.originalPrice}</s>
                )}
                {product.originalPrice && (
                    <Badge variant="outline" className="border-green-500 text-green-500">
                        ECONOMIZE R$ {economy}
                    </Badge>
                )}
              </div>
              
              {product.stock && (
                <div className="flex items-center gap-2 mt-4 text-green-500">
                    <CheckCircle size={16} />
                    <span>Em estoque</span>
                </div>
              )}

              {product.sizes && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-300">Tamanho</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "px-4 py-2 border rounded-full text-sm transition",
                          {
                            "bg-[#d4af37] text-black border-[#d4af37]": selectedSize === size,
                            "border-gray-600 hover:border-[#d4af37]": selectedSize !== size,
                            "line-through text-gray-500 cursor-not-allowed": size === '21cm' // Example for unavailable
                          }
                        )}
                        disabled={size === '21cm'}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto pt-8">
                <Button className="w-full h-12 bg-[#e5e5e5] text-black hover:bg-white" onClick={handleAddToCart}>
                  ADICIONAR AO CARRINHO
                </Button>
                <Button className="w-full h-12 mt-4 bg-black text-white border border-white hover:bg-gray-900" onClick={handleBuyNow}>
                  COMPRE JÁ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
