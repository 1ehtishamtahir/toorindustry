import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { allCategories, products } from "@/data/products";
import { ProductCatalogue } from "@/components/ProductTools";

export const metadata: Metadata = { title: "Product Catalogue", description: "Browse veterinary instruments and equestrian equipment by category, product, or SKU." };

export default function ProductsPage() {
  return <>
    <section className="inner-hero"><div className="page-wrap"><div className="section-kicker">The complete range</div><h1>Product<br /><em>catalogue.</em></h1><p>Explore {allCategories.length} categories and a growing collection of professional-grade instruments built for veterinary, equestrian, and OEM partners.</p></div></section>
    <section className="catalogue-intro page-wrap"><div><div className="section-kicker">Find your fit</div><h2>Search by what<br /><span>you need.</span></h2></div><div><p>Use product names, SKUs, or use cases to move quickly from discovery to a quotation-ready shortlist.</p><Link href="/contact" className="text-link">Need help choosing? Talk to us <ArrowUpRight size={16}/></Link></div></section>
    <section className="catalogue-section page-wrap"><ProductCatalogue products={products}/></section>
  </>;
}
