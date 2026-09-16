"use client";
import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = { id: string; category: string; alt: string };

export default function GalleryGrid({
  categories,
  images,
}: {
  categories: { id: string; label: string }[];
  images: GalleryImage[];
}) {
  const [active, setActive] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = images.filter(
    (image) => active === "all" || image.category === active
  );

  const openLightbox = useCallback(
    (index: number) => setLightboxIndex(index),
    []
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((i) => (i! + 1) % visible.length);
  }, [lightboxIndex, visible.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((i) => (i! - 1 + visible.length) % visible.length);
  }, [lightboxIndex, visible.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <>
      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category.id}
            className={active === category.id ? "active" : ""}
            onClick={() => setActive(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {visible.map((image, index) => (
          <div
            key={image.id}
            className={`gallery-tile gallery-tile-${index % 5}`}
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{image.alt}</strong>
            <small>{image.category}</small>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            className="gallery-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <button
            className="gallery-lightbox-nav gallery-lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`gallery-lightbox-tile gallery-tile gallery-tile-${lightboxIndex % 5}`}>
              <span>{String(lightboxIndex + 1).padStart(2, "0")}</span>
              <strong>{visible[lightboxIndex].alt}</strong>
              <small>{visible[lightboxIndex].category}</small>
            </div>
            <p className="gallery-lightbox-caption">
              {visible[lightboxIndex].alt}
            </p>
            <p className="gallery-lightbox-counter">
              {lightboxIndex + 1} / {visible.length}
            </p>
          </div>

          <button
            className="gallery-lightbox-nav gallery-lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
}
