"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Star, Sparkles, ShoppingBag, Users, TrendingUp, Award } from "lucide-react"
import { useEffect, useState } from "react"

const getCategoriesData = (t: (key: string) => string) => [
  {
    id: 1,
    name: t("arabian"),
    description: t("arabianDesc"),
    image: "/arabian-perfume-bottle-luxury-gold.jpg",
  },
  {
    id: 2,
    name: t("french"),
    description: t("frenchDesc"),
    image: "/french-perfume-elegant-sophisticated.jpg",
  },
  {
    id: 3,
    name: t("floral"),
    description: t("floralDesc"),
    image: "/floral-perfume-pink-luxury-bottle.jpg",
  },
  {
    id: 4,
    name: t("woody"),
    description: t("woodyDesc"),
    image: "/woody-perfume-dark-amber-bottle.jpg",
  },
  {
    id: 5,
    name: t("citrus"),
    description: t("citrusDesc"),
    image: "/citrus-perfume-bright-fresh-bottle.jpg",
  },
  {
    id: 6,
    name: t("unisex"),
    description: t("unisexDesc"),
    image: "/unisex-perfume-modern-minimal-bottle.jpg",
  },
]

const getFeaturesData = (t: (key: string) => string) => [
  {
    icon: Sparkles,
    title: t("curatedSelection"),
    description: t("curatedDesc"),
  },
  {
    icon: Star,
    title: t("premiumQuality"),
    description: t("premiumQualityDesc"),
  },
  {
    icon: ShoppingBag,
    title: t("easyShopping"),
    description: t("easyShoppingDesc"),
  },
]

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const categories = getCategoriesData(t)
  const features = getFeaturesData(t)

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="py-40 text-center">
          <p className="text-foreground/60">Loading...</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-6 w-fit">
                  <div className="w-1 h-6 bg-accent rounded-full" />
                  <span className="text-sm font-medium text-accent tracking-wider">{t("heroTag")}</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                  {t("heroTitle")}
                  <span className="text-accent"> {t("heroTitleAccent")}</span>
                </h1>

                <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                  {t("heroDescription")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#categories"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300"
                  >
                    {t("exploreCollections")}
                  </Link>
                  <Link
                    href="#business"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors duration-300"
                  >
                    {t("learnMore")}
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative h-96 sm:h-full hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl" />
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-2xl"
                  style={{ backgroundImage: "url('/arabian-perfume-bottle-luxury-gold.jpg')" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{t("whyChoose")}</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t("whyChooseDesc")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-xl border border-border bg-background hover:bg-primary/5 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{t("ourCollections")}</h2>
              <p className="text-lg text-foreground/70">{t("exploreCurated")}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
                >
                  {/* Background with gradient overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-125"
                    style={{ backgroundImage: `url('${category.image}')` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm mb-4">{category.description}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/50 group-hover:bg-accent/30 transition-colors">
                      <span className="text-accent text-sm font-medium">{t("viewCollection")}</span>
                      <svg
                        className="w-4 h-4 text-accent transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="business" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t("businessTitle")}</h2>
              <p className="text-lg text-primary-foreground/90">{t("businessSubtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-primary-foreground/10 rounded-lg p-8 border border-accent/30 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t("forEveryone")}</h3>
                <p className="text-primary-foreground/80">{t("forEveryoneDesc")}</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-8 border border-accent/30 text-center">
                <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t("growIncome")}</h3>
                <p className="text-primary-foreground/80">{t("growIncomeDesc")}</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-8 border border-accent/30 text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t("premiumSupport")}</h3>
                <p className="text-primary-foreground/80">{t("premiumSupportDesc")}</p>
              </div>
            </div>

            <div className="bg-primary-foreground/5 rounded-lg border border-accent/30 p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">{t("programOverview")}</h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">{t("programDesc")}</p>
              <ul className="space-y-3 text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>{t("wholesaleRates")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>{t("minimalInvestment")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>{t("comprehensiveTraining")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>{t("marketingMaterials")}</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918793219145?text=Hi%20Perfume%20Markaz%2C%20I'm%20interested%20in%20joining%20your%20Business%20with%20Purpose%20program.%20Please%20provide%20me%20with%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.938 1.495 9.842 9.842 0 10 13.936 3.485 9.838 9.838 0 00-9.005-4.98M1 11.5C1 5.925 5.925 1 11.5 1S22 5.925 22 11.5 17.075 22 11.5 22 1 17.075 1 11.5z" />
                </svg>
                {t("joinProgram")}
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors"
              >
                {t("learnMore")}
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">{t("readyToFind")}</h2>
            <p className="text-xl text-foreground/70 mb-8">{t("browseExclusive")}</p>
            <Link
              href="#categories"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300"
            >
              {t("shopNow")}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
