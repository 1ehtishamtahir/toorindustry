import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type ProductCategory, type ProductGroup, products } from "@/data/products";
import { ProductCatalogue } from "@/components/ProductTools";

export default function CategoryLanding({ group, categories }: { group: ProductGroup; categories: ProductCategory[] }) {
  const groupProducts = products.filter((product) => product.group === group);
  const title = group === "veterinary" ? "Veterinary Instruments" : "Equestrian Equipment";
  const copy = group === "veterinary" ? "Professional-grade tools for livestock management, surgery, reproduction, and everyday veterinary care." : "Premium saddles, bits, gloves, rugs, and accessories crafted for comfort, control, and durability.";
  return <>
    <section className={`inner-hero inner-hero-${group}`}><div className="page-wrap"><div className="section-kicker">{group === "veterinary" ? "Veterinary division" : "Equestrian division"}</div><h1>{title.split(" ")[0]}<br /><em>{title.split(" ").slice(1).join(" ")}.</em></h1><p>{copy} Explore all {categories.length} categories below.</p></div></section>
    <section className="category-landing-nav page-wrap"><div><span className="category-label">Jump to a category</span><div className="category-pill-row">{categories.map((category) => <Link key={category.slug} href={`/products/${group}/${category.slug}`}>{category.name} <ArrowUpRight size={13}/></Link>)}</div></div></section>
    <section className="catalogue-section page-wrap"><ProductCatalogue products={groupProducts} title={`${categories.length} categories`} /></section>
  </>;
}
