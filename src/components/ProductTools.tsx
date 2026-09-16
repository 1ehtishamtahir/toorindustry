"use client";

import Link from "next/link";
import { ArrowUpRight, Check, GitCompareArrows, Plus, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";

const inquiryKey = "toor-inquiry-list";

export function InquiryButton({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);
  useEffect(() => {
    try {
      setAdded(
        JSON.parse(localStorage.getItem(inquiryKey) || "[]").some(
          (item: Product) => item.slug === product.slug
        )
      );
    } catch {
      setAdded(false);
    }
  }, [product.slug]);

  function toggle(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    let current: Product[] = [];
    try {
      current = JSON.parse(localStorage.getItem(inquiryKey) || "[]");
    } catch {
      current = [];
    }
    const next = current.some((item) => item.slug === product.slug)
      ? current.filter((item) => item.slug !== product.slug)
      : [...current, product];
    localStorage.setItem(inquiryKey, JSON.stringify(next));
    setAdded(!added);
    window.dispatchEvent(new Event("toor-inquiry-change"));
  }

  return (
    <button
      onClick={toggle}
      className={`inquiry-button ${added ? "is-added" : ""}`}
    >
      <span>{added ? <Check size={13} /> : <Plus size={13} />}</span>
      {added ? "Added to inquiry" : "Add to inquiry"}
    </button>
  );
}

export function ProductCatalogue({
  products,
  title = "Browse the range",
}: {
  products: Product[];
  title?: string;
}) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<"all" | "veterinary" | "equestrian">("all");
  const [compare, setCompare] = useState<string[]>([]);

  const visible = useMemo(
    () =>
      products.filter(
        (product) =>
          `${product.name} ${product.sku} ${product.shortDescription}`
            .toLowerCase()
            .includes(query.toLowerCase()) &&
          (group === "all" || product.group === group)
      ),
    [products, query, group]
  );

  const compareProducts = products.filter((product) =>
    compare.includes(product.slug)
  );

  const allSpecLabels = useMemo(() => {
    const labels = new Set<string>();
    compareProducts.forEach((p) => p.specs.forEach((s) => labels.add(s.label)));
    return Array.from(labels);
  }, [compareProducts]);

  const getSpecValue = (product: Product, label: string) => {
    return product.specs.find((s) => s.label === label)?.value ?? "—";
  };

  return (
    <div className="catalogue-tools">
      <div className="catalogue-toolbar">
        <div className="catalogue-search">
          <Search size={17} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by product, SKU, or use…"
          />
        </div>
        <div className="catalogue-filters">
          <button
            className={group === "all" ? "active" : ""}
            onClick={() => setGroup("all")}
          >
            All
          </button>
          <button
            className={group === "veterinary" ? "active" : ""}
            onClick={() => setGroup("veterinary")}
          >
            Veterinary
          </button>
          <button
            className={group === "equestrian" ? "active" : ""}
            onClick={() => setGroup("equestrian")}
          >
            Equestrian
          </button>
        </div>
      </div>

      <div className="catalogue-result-row">
        <span>
          {visible.length} products · {title}
        </span>
        {compare.length > 0 && (
          <span>{compare.length}/3 selected for comparison</span>
        )}
      </div>

      <div className="product-grid catalogue-grid">
        {visible.map((product, index) => (
          <Link
            key={product.slug}
            href={`/products/${product.group}/${product.categorySlug}/${product.slug}`}
            className="product-card"
          >
            <div className={`product-art product-art-${index % 4}`}>
              <span>{product.sku}</span>
              <div className="instrument-mark" />
            </div>
            <div className="product-meta">
              <span>{product.group}</span>
              <h3>{product.name}</h3>
              <small>{product.shortDescription}</small>
              <div className="catalogue-card-actions">
                <InquiryButton product={product} />
                <label
                  onClick={(e) => e.stopPropagation()}
                  className="compare-check"
                >
                  <input
                    type="checkbox"
                    checked={compare.includes(product.slug)}
                    disabled={
                      !compare.includes(product.slug) && compare.length >= 3
                    }
                    onChange={() =>
                      setCompare(
                        compare.includes(product.slug)
                          ? compare.filter((slug) => slug !== product.slug)
                          : [...compare, product.slug]
                      )
                    }
                  />
                  <GitCompareArrows size={13} /> Compare
                </label>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {compareProducts.length > 0 && (
        <div className="compare-panel">
          <div>
            <strong>Compare instruments</strong>
            <span>Select up to three products to compare.</span>
          </div>
          <div className="compare-items">
            {compareProducts.map((product) => (
              <span key={product.slug}>
                {product.name}
                <button
                  onClick={() =>
                    setCompare(compare.filter((slug) => slug !== product.slug))
                  }
                >
                  <X size={13} />
                </button>
              </span>
            ))}
          </div>
          <button
            className="compare-button"
            onClick={() =>
              document
                .getElementById("compare-table")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Compare now <ArrowUpRight size={15} />
          </button>
        </div>
      )}

      {compareProducts.length > 1 && (
        <div id="compare-table" className="compare-table">
          <h3>Quick comparison</h3>
          <table className="compare-full-table">
            <thead>
              <tr>
                <th>Feature</th>
                {compareProducts.map((p) => (
                  <th key={p.slug}>{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SKU</td>
                {compareProducts.map((p) => (
                  <td key={p.slug}>{p.sku}</td>
                ))}
              </tr>
              <tr>
                <td>Category</td>
                {compareProducts.map((p) => (
                  <td key={p.slug}>
                    {p.group === "veterinary" ? "Veterinary" : "Equestrian"}
                  </td>
                ))}
              </tr>
              {allSpecLabels.map((label) => (
                <tr key={label}>
                  <td>{label}</td>
                  {compareProducts.map((p) => (
                    <td key={p.slug}>{getSpecValue(p, label)}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <td>Description</td>
                {compareProducts.map((p) => (
                  <td key={p.slug}>{p.shortDescription}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
