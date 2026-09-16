import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { veterinaryCategories, equestrianCategories, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = { title: "Product Catalogue", description: "Browse veterinary instruments and equestrian equipment by category, product, or SKU." };

export default function ProductsPage() {
  return <>
    <section className="inner-hero"><div className="page-wrap"><div className="section-kicker">The complete range</div><h1>Product<br /><em>catalogue.</em></h1><p>Explore {veterinaryCategories.length + equestrianCategories.length} categories and a growing collection of professional-grade instruments built for veterinary, equestrian, and OEM partners.</p></div></section>

    {/* Veterinary Sub-Categories */}
    <section className="section page-wrap">
      <div className="section-heading">
        <div>
          <div className="section-kicker">Veterinary Division</div>
          <h2>Veterinary<br /><span>{veterinaryCategories.length} categories.</span></h2>
        </div>
        <p>Professional-grade tools for livestock management, surgery, reproduction, and everyday veterinary care.</p>
      </div>
      <div className="category-image-grid">
        {veterinaryCategories.map((category) => {
          const catProducts = getProductsByCategory(category.slug);
          return (
            <Link
              key={category.slug}
              href={`/products/veterinary/${category.slug}`}
              className="category-image-card"
            >
              <div className="category-image-card-img">
                <img src={category.heroImage} alt={category.name} />
              </div>
              <div className="category-image-card-body">
                <h3>{category.name}</h3>
                <span>{catProducts.length} products</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>

    {/* Equestrian Sub-Categories */}
    <section className="section page-wrap" style={{ background: "var(--paper)", marginTop: -40, paddingTop: 80, paddingBottom: 80, borderRadius: 24 }}>
      <div className="section-heading">
        <div>
          <div className="section-kicker">Equestrian Division</div>
          <h2>Equestrian<br /><span>{equestrianCategories.length} categories.</span></h2>
        </div>
        <p>Premium saddles, bits, gloves, rugs, and accessories crafted for comfort, control, and durability.</p>
      </div>
      <div className="category-image-grid">
        {equestrianCategories.map((category) => {
          const catProducts = getProductsByCategory(category.slug);
          return (
            <Link
              key={category.slug}
              href={`/products/equestrian/${category.slug}`}
              className="category-image-card"
            >
              <div className="category-image-card-img">
                <img src={category.heroImage} alt={category.name} />
              </div>
              <div className="category-image-card-body">
                <h3>{category.name}</h3>
                <span>{catProducts.length} products</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  </>;
}
