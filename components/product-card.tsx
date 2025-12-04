"use client";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  ML?: string;
}

interface ProductCardProps {
  product: Product;
  onAddClick: () => void;
}

export default function ProductCard({ product, onAddClick }: ProductCardProps) {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-colors">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundImage: `url('${product.image}')` }}
        />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-1">
          {product.name}{" "}
          {product.ML && (
            <span className="text-muted-foreground text-base">
              ({product.ML} ML)
            </span>
          )}
        </h3>

        <p className="text-2xl font-bold text-accent mb-4">₹{product.price}</p>

        <button
          onClick={onAddClick}
          className="w-full py-2 px-4 bg-accent text-accent-foreground font-semibold rounded-md hover:opacity-90 transition-opacity"
        >
          Add to Order
        </button>
      </div>
    </div>
  );
}
