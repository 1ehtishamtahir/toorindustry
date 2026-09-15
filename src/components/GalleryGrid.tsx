"use client";
import { useState } from "react";

type GalleryImage = { id: string; category: string; alt: string };
export default function GalleryGrid({ categories, images }: { categories: { id: string; label: string }[]; images: GalleryImage[] }) {
  const [active, setActive] = useState("all");
  const visible = images.filter((image) => active === "all" || image.category === active);
  return <><div className="gallery-filters">{categories.map((category) => <button key={category.id} className={active === category.id ? "active" : ""} onClick={() => setActive(category.id)}>{category.label}</button>)}</div><div className="gallery-grid">{visible.map((image, index) => <div key={image.id} className={`gallery-tile gallery-tile-${index % 5}`}><span>{String(index + 1).padStart(2, "0")}</span><strong>{image.alt}</strong><small>{image.category}</small></div>)}</div></>;
}
