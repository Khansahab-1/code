"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/lib/language-context";
import type { Product } from "@/components/product-card";

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
  const { t } = useLanguage();
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  const pricePerBottle = Number.parseInt(product.price.replace(/₹|,/g, ""));

  /* ================= OFFER LOGIC ================= */
  const subTotal = (() => {
  if (product.offer?.includes("Buy 2") && selectedQuantity >= 2) {
    const pairs = Math.floor(selectedQuantity / 2);
    const remaining = selectedQuantity % 2;

    return pairs * 700 + remaining * pricePerBottle;
  }

  return selectedQuantity * pricePerBottle;
})();

  /* ================= WHATSAPP ================= */
  const handleWhatsAppRedirect = () => {
    const message = `Hi Perfume Markaz 👋

I'd like to order:

• Product: ${product.name}
• Quantity: ${selectedQuantity}
• Size: 6ml
• Subtotal: ₹${subTotal}

Please confirm availability.`;

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-card rounded-xl shadow-2xl max-w-md w-full border border-border max-h-[90vh] overflow-y-auto">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border sticky top-0 bg-card">
            <button
              onClick={onViewCollections}
              className="flex items-center gap-2 text-accent text-sm font-medium"
            >
              ← {t("viewCollections")}
            </button>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground text-xl"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div className="p-5 space-y-5">
            <div>
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-accent font-semibold mt-1">
                ₹{product.price} / bottle
              </p>

              {product.offer && (
                <div className="mt-2 inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                  🎉 {product.offer}
                </div>
              )}
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("selectQuantity")}
              </label>
              <select
                value={selectedQuantity}
                onChange={(e) =>
                  setSelectedQuantity(Number.parseInt(e.target.value))
                }
                className="w-full px-4 py-2.5 rounded-md border border-border bg-input focus:ring-2 focus:ring-accent"
              >
                {QUANTITIES.map((qty) => (
                  <option key={qty} value={qty}>
                    {qty} {qty === 1 ? t("bottle") : t("bottles")}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Summary */}
            <div className="bg-muted rounded-lg p-4 border border-border space-y-2">
              <div className="flex justify-between text-sm">
                <span>Price per bottle</span>
                <span>₹{pricePerBottle}</span>
              </div>

              {product.offer && selectedQuantity >= 2 && (
                <div className="flex justify-between text-sm text-green-600">
                  <span>Offer applied</span>
                  <span>✓</span>
                </div>
              )}

              <div className="border-t pt-2 flex justify-between font-bold text-accent text-lg">
                <span>{t("subTotal")}</span>
                <span>₹{subTotal}</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex gap-3 px-5 py-4 border-t border-border sticky bottom-0 bg-card">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-md bg-muted text-foreground font-medium hover:bg-muted/80"
            >
              {t("cancel")}
            </button>
            <button
              onClick={handleWhatsAppRedirect}
              className="flex-1 py-2.5 rounded-md bg-accent text-primary font-semibold hover:opacity-90 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487z" />
              </svg>
              {t("orderViaWhatsapp")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
