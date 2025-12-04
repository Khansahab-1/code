"use client"
import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import ProductModal from "@/components/product-modal"
import { useParams } from "next/navigation"
import { useLanguage } from "@/lib/language-context"

const productsByCategory: Record<number, any[]> = {
  1: [
    { id: 1, name: "Oud E Kashmir", price: "400", ML: "6", image: "/Kashmiri_oud.webp" },
    { id: 2, name: "Oud E Rose", price: "400", ML: "6", image: "/rose_oud.webp" },
    { id: 3, name: "Amber Musk", price: "400", ML: "6", image: "/musk-amber.webp" },
    { id: 4, name: "Rawdah", price: "500", ML: "6", image: "/rawdah.webp" },
    { id: 5, name: "Musk E Tahara", price: "500", ML: "6", image: "/musk-e-tahara.jpg" },
    { id: 6, name: "Musk E Rijali", price: "500", ML: "6", image: "/musk-e-rijali.jpg" },
    { id: 7, name: "Hawaas", price: "500", ML: "6", image: "/hawas.webp" },
    { id: 8, name: "1001 Nights", price: "500", ML: "6", image: "/1001-nights.png" },
    { id: 9, name: "Ponds", price: "400", ML: "6", image: "/ponds-attar.webp" },
  ],

  // French (2)
  2: [
    { id: 10, name: "Z Paris", price: "500", ML: "6", image: "/z-paris.jpg" },
    { id: 11, name: "Gucci Flora", price: "500", ML: "6", image: "/Gucci_Flora.webp" },
    { id: 12, name: "Royal Oud", price: "500", ML: "6", image: "/royal-oud.jpg" },
    { id: 13, name: "Maarj", price: "500", ML: "6", image: "/maarj.webp" },
    { id: 14, name: "Rasasi Mukhallat Al Oud Clone", price: "500", ML: "6", image: "/rasasi-mukhallat-al-oud.webp" },
    { id: 15, name: "Rasasi Al Oud Clone", price: "500", ML: "6", image: "/rasasi-al-oud-clone.jpg" },
  ],

  // Floral (3)
  3: [
    { id: 16, name: "Mukhallat Emirates", price: "500", ML: "6", image: "/Mukhallat-Emirates.jpg" },
    { id: 17, name: "Purple Oud", price: "400", ML: "6", image: "/purple-oud.jpg" },
    { id: 18, name: "Jannatul Firdaus", price: "400", ML: "6", image: "/jannatul-firdaus.avif" },
    { id: 19, name: "White Oud", price: "400", ML: "6", image: "/white-oud.webp" },
    { id: 20, name: "Ameer Al Oud", price: "500", ML: "6", image: "/ameer-al-oud.jpg" },
    { id: 21, name: "Sultan", price: "500", ML: "6", image: "/Sultan_Attar.webp" },
  ],

  // Woody (4)
  4: [
    { id: 22, name: "Dove Attar", price: "400", ML: "6", image: "/Dove_Attar.webp" },
    { id: 23, name: "Mitti Attar", price: "500", ML: "6", image: "/mitti.webp" },
    { id: 24, name: "Dubai Oud", price: "500", ML: "6", image: "/Dubai_Oud.webp" },
    { id: 25, name: "Mafia Oud", price: "500", ML: "6", image: "/mafia-oud.jpg" },
    { id: 26, name: "Bin Shaikh", price: "500", ML: "6", image: "/bin-shaikh.jpg" },
  ],

  // Citrus (5)
  5: [
    { id: 27, name: "Lemon Fresh", price: "400", ML: "6", image: "/attar-lemon.jpg" },
    { id: 28, name: "Mausam", price: "400", ML: "6", image: "/mausam.webp" },
    { id: 29, name: "Oud Bergamot", price: "500", ML: "6", image: "/oud-bergamot.png" },
    { id: 30, name: "Citrus Oud", price: "400", ML: "6", image: "/Citrus_oud.webp" },
    { id: 31, name: "Nazaakat", price: "400", ML: "6", image: "/nazaakat.webp" },
    { id: 32, name: "Shamamah", price: "400", ML: "6", image: "/shamamah.webp" },
  ],

  // Unisex (6)
  6: [
    { id: 33, name: "Blue Girl", price: "400", ML: "6", image: "/blue-girl.webp" },
    { id: 34, name: "Jasmin", price: "400", ML: "6", image: "/jasmin.jpg" },
    { id: 35, name: "Sadaf", price: "400", ML: "6", image: "/sadaf.webp" },
    { id: 36, name: "Red Rose", price: "400", ML: "6", image: "/red-rose.jpg" },
    { id: 37, name: "Aurum", price: "400", ML: "6", image: "/aurum.jpg" },
    { id: 38, name: "Sabaya", price: "400", ML: "6", image: "/Attar-Sabaya.webp" },
  ],
}



const categoryKeys = {
  1: "arabian",
  2: "french",
  3: "floral",
  4: "woody",
  5: "citrus",
  6: "unisex",
} as Record<number, string>

export default function CategoryPage() {
  const params = useParams()
  const { t } = useLanguage()
  const id = Number.parseInt(params.id as string)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const products = productsByCategory[id] || []
  const categoryKey = categoryKeys[id] || "collection"
  const categoryName = t(categoryKey)

  const handleViewCollections = () => {
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/50 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-accent hover:text-accent/80 transition-colors">
                {t("Home")}
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{categoryName}</span>
            </div>
          </div>
        </div>

        {/* Category Header */}
        <section className="bg-gradient-to-r from-primary to-primary/90 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-accent mb-2 text-balance">
              {categoryName} {t("Collection")}
            </h1>
            <p className="text-primary-foreground/80">{t("exploreCurated")}</p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddClick={() => setSelectedProduct({ ...product, category: categoryName })}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-foreground/60">No products available in this collection.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onViewCollections={handleViewCollections}
        />
      )}

      <Footer />
    </div>
  )
}
