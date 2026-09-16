import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type ProductCategory, type ProductGroup, products, getProductsByCategory } from "@/data/products";
import { ProductCatalogue } from "@/components/ProductTools";

export default function CategoryLanding({ group, categories }: { group: ProductGroup; categories: ProductCategory[] }) {
  const groupProducts = products.filter((product) => product.group === group);
  const title = group === "veterinary" ? "Veterinary Instruments" : "Equestrian Equipment";
  const copy = group === "veterinary" ? "Professional-grade tools for livestock management, surgery, reproduction, and everyday veterinary care." : "Premium saddles, bits, gloves, rugs, and accessories crafted for comfort, control, and durability.";
  return <>
    <section className={`inner-hero inner-hero-${group}`}><div className="page-wrap"><div className="section-kicker">{group === "veterinary" ? "Veterinary division" : "Equestrian division"}</div><h1>{title.split(" ")[0]}<br /><em>{title.split(" ").slice(1).join(" ")}.</em></h1><p>{copy} Explore all {categories.length} categories below.</p></div></section>
    <section className="section page-wrap">
      <div className="section-heading">
        <div>
          <div className="section-kicker">Browse by category</div>
          <h2>All <span>{categories.length} categories.</span></h2>
        </div>
      </div>
      <div className="category-image-grid">
        {categories.map((category) => {
          const catProducts = getProductsByCategory(category.slug);
          return (
            <Link
              key={category.slug}
              href={`/products/${group}/${category.slug}`}
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
    <section className="catalogue-section page-wrap"><ProductCatalogue products={groupProducts} title={`${categories.length} categories`} /></section>
  </>;
}
