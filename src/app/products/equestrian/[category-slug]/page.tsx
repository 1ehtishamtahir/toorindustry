import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import {
  getCategoryBySlug,
  getProductsByCategory,
  equestrianCategories,
} from "@/data/products";
import { InquiryButton } from "@/components/ProductTools";

type Props = {
  params: Promise<{ "category-slug": string }>;
};

export function generateStaticParams() {
  return equestrianCategories.map((cat) => ({
    "category-slug": cat.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { "category-slug": slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function EquestrianCategoryPage({ params }: Props) {
  const { "category-slug": slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(slug);

  return (
    <>
      <section className="inner-hero inner-hero-equestrian">
        <div className="page-wrap">
          <nav style={{ fontSize: 12, color: "#94a3b8", marginBottom: 16 }}>
            <Link href="/products" style={{ color: "#94a3b8", transition: "color .3s" }}>
              Products
            </Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <Link href="/products/equestrian" style={{ color: "#94a3b8", transition: "color .3s" }}>
              Equestrian
            </Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <span style={{ color: "#fff" }}>{category.name}</span>
          </nav>
          <div className="section-kicker">{category.group} division</div>
          <h1>{category.name.split(" ").slice(0, 2).join(" ")}<br /><em>{category.name.split(" ").slice(2).join(" ") || "Equipment."}</em></h1>
          <p>{category.description}</p>
        </div>
      </section>

      <section className="section page-wrap">
        {categoryProducts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <p style={{ color: "#64748b", fontSize: 16, margin: "0 0 16px" }}>
              Products coming soon. Contact us for details.
            </p>
            <Link href="/contact" className="text-link" style={{ display: "inline-flex" }}>
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="product-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
            {categoryProducts.map((product) => (
              <div key={product.slug} style={{ display: "flex", flexDirection: "column" }}>
                <Link
                  href={`/products/equestrian/${slug}/${product.slug}`}
                  className="product-card"
                  style={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <div className={`product-art`} style={{ flex: "0 0 auto" }}>
                    <span>{product.sku}</span>
                    <div className="instrument-mark" />
                  </div>
                  <div className="product-meta" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <span>{product.sku}</span>
                    <h3 style={{ flex: 1 }}>{product.name}</h3>
                    <small style={{ display: "block", marginBottom: 12 }}>{product.shortDescription}</small>
                  </div>
                </Link>
                <div style={{ padding: "0 20px 20px" }}>
                  <InquiryButton product={product} />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
