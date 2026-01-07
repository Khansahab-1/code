"use client";

// ✅ NAMED EXPORT
export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  ML?: string;
  offer?: string;
  category?: string;
};

interface ProductCardProps {
  product: Product;
  onAddClick: () => void;
}

// ✅ DEFAULT EXPORT (component)
export default function ProductCard({
  product,
  onAddClick,
}: ProductCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-xl">
      {product.offer && (
        <div className="absolute top-4 left-4 z-20 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
          🎉 {product.offer}
        </div>
      )}

      <div className="relative aspect-square overflow-hidden bg-muted">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url('${product.image}')` }}
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold truncate">{product.name}</h3>

        {product.ML && (
          <p className="text-sm text-muted-foreground">{product.ML} ML</p>
        )}

        <p className="text-2xl font-bold text-accent mt-2">
          ₹{product.price}
        </p>

        <button
          onClick={onAddClick}
          className="mt-4 w-full py-2.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90"
        >
          Add to Order
        </button>
      </div>
    </div>
  );
}
