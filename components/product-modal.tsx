"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onViewCollections: () => void;
}

const SIZES = ["6ml"];
const QUANTITIES = Array.from({ length: 10 }, (_, i) => i + 1);

export default function ProductModal({
  product,
  onClose,
  onViewCollections,
}: ProductModalProps) {
  const { t, language } = useLanguage();
  const [selectedSize, setSelectedSize] = useState<string>(SIZES[0]);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const pricePerBottle = Number.parseInt(product.price.replace(/₹|,/g, ""));
  const subTotal = pricePerBottle * selectedQuantity;

  const handleWhatsAppRedirect = () => {
    const message = `Hi Perfume Markaz,\n\nI'd like to order:\n\nProduct: ${
      product.name
    }\nQuantity: ${selectedQuantity} ${
      selectedQuantity > 1 ? t("bottles") : t("bottle")
    }\nSize: ${selectedSize}\nSub Total: ₹${subTotal}\n\nPlease confirm availability and proceed with the order.`;
    const whatsappUrl = `https://wa.me/918793219145?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-40" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-card rounded-lg shadow-2xl max-w-md w-full border border-border pointer-events-auto max-h-[90vh] overflow-y-auto">
          {/* Modal Header with Back Button */}
          <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
            <button
              onClick={onViewCollections}
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {t("viewCollections")}
            </button>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors text-2xl"
            >
              ×
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {product.name}
              </h2>
              <p className="text-lg text-accent font-semibold">
                ₹{product.price} {t("pricePerBottle").split(":")[0]}
              </p>
              <div className="py-2 px-3 rounded-md bg-muted border border-border text-foreground font-medium">
                6ml
              </div>
            </div>

            {/* Size Selection */}
            {/* Fixed Size */}
            {/* Quantity Selection */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                {t("selectQuantity")}
              </label>
              <select
                value={selectedQuantity}
                onChange={(e) =>
                  setSelectedQuantity(Number.parseInt(e.target.value))
                }
                className="w-full px-4 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {QUANTITIES.map((qty) => (
                  <option key={qty} value={qty}>
                    {qty} {qty === 1 ? t("bottle") : t("bottles")}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-primary/10 rounded-md p-4 border border-accent/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-foreground/80 font-medium">
                  {t("pricePerBottle")}
                </span>
                <span className="font-semibold text-foreground">
                  ₹{pricePerBottle}
                </span>
              </div>
              <div className="border-t border-accent/20 pt-3 flex items-center justify-between">
                <span className="text-lg font-bold text-accent">
                  {t("subTotal")}
                </span>
                <span className="text-2xl font-bold text-accent">
                  ₹{subTotal}
                </span>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex gap-3 p-6 border-t border-border sticky bottom-0 bg-card">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-muted text-foreground font-semibold rounded-md hover:bg-muted/80 transition-colors"
            >
              {t("cancel")}
            </button>
            <button
              onClick={handleWhatsAppRedirect}
              className="flex-1 py-3 px-4 bg-accent text-primary font-semibold rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.938 1.495 9.842 9.842 0 10 13.936 3.485 9.838 9.838 0 00-9.005-4.98M1 11.5C1 5.925 5.925 1 11.5 1S22 5.925 22 11.5 17.075 22 11.5 22 1 17.075 1 11.5z" />
              </svg>
              <span>{t("orderViaWhatsapp")}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
