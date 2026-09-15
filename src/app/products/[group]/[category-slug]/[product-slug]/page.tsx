import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, Phone } from "lucide-react";
import {
  getProductBySlug,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/data/products";
import { InquiryButton } from "@/components/ProductTools";

type Props = {
  params: Promise<{ group: string; "category-slug": string; "product-slug": string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { "product-slug": slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} (${product.sku})`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { group, "category-slug": catSlug, "product-slug": prodSlug } = await params;
  const product = getProductBySlug(prodSlug);
  if (!product) notFound();
  if (product.group !== group) notFound();

  const category = getCategoryBySlug(catSlug);
  const relatedProducts = getProductsByCategory(catSlug)
    .filter((p) => p.slug !== prodSlug)
    .slice(0, 4);

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ background: "var(--paper)", padding: "16px 0" }}>
        <div className="page-wrap">
          <nav style={{ fontSize: 12, color: "#64748b" }}>
            <Link href="/products" style={{ color: "#64748b", transition: "color .3s" }}>
              Products
            </Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <Link
              href={`/products/${product.group}`}
              style={{ color: "#64748b", transition: "color .3s" }}
            >
              {product.group === "veterinary" ? "Veterinary" : "Equestrian"}
            </Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <Link
              href={`/products/${product.group}/${catSlug}`}
              style={{ color: "#64748b", transition: "color .3s" }}
            >
              {category?.name ?? catSlug.replace(/-/g, " ")}
            </Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <span style={{ color: "var(--ink)" }}>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="section page-wrap">
        <div className="intro-grid" style={{ alignItems: "start" }}>
          {/* Product Image */}
          <div style={{
            background: "var(--paper)", borderRadius: 16, height: 400,
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "1px solid var(--line)"
          }}>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 36, fontWeight: 800, color: "var(--line)", margin: "0 0 8px", letterSpacing: "-0.03em" }}>
                {product.sku}
              </p>
              <p style={{ fontSize: 11, color: "#94a3b8" }}>(Product image placeholder)</p>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p style={{ fontSize: 11, color: "var(--coral)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, margin: "0 0 8px" }}>
              {product.sku}
            </p>
            <h1 style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.04em", margin: "0 0 16px" }}>
              {product.name}
            </h1>
            <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: 15, marginBottom: 28 }}>
              {product.description}
            </p>

            {/* Specs */}
            {product.specs.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 12px" }}>Specifications</h3>
                <div style={{ borderTop: "1px solid var(--line)" }}>
                  {product.specs.map((spec) => (
                    <div key={spec.label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--line)", fontSize: 13 }}>
                      <span style={{ fontWeight: 600, color: "#475569" }}>{spec.label}</span>
                      <span style={{ color: "#64748b" }}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <InquiryButton product={product} />
              <a
                href={`mailto:info@toorindustries.com?subject=Inquiry: ${product.name} (${product.sku})`}
                className="button button-coral"
              >
                <Mail size={16} /> Inquire Now
              </a>
              <a
                href="https://wa.me/923006126063"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                style={{ background: "#25d366", color: "#fff" }}
              >
                <Phone size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section" style={{ background: "var(--paper)" }}>
          <div className="page-wrap">
            <h2 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 28px" }}>Related Products</h2>
            <div className="product-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/products/${rp.group}/${rp.categorySlug}/${rp.slug}`}
                  className="product-card"
                >
                  <div className="product-art">
                    <span>{rp.sku}</span>
                    <div className="instrument-mark" />
                  </div>
                  <div className="product-meta">
                    <span>{rp.sku}</span>
                    <h3>{rp.name}</h3>
                    <small>View details</small>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
