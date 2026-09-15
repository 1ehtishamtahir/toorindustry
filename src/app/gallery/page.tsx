import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of Toor Industries products, factory, and production facility in Sialkot, Pakistan.",
};

const galleryCategories = [
  { id: "all", label: "All" },
  { id: "veterinary", label: "Veterinary Products" },
  { id: "equestrian", label: "Equestrian Products" },
  { id: "factory", label: "Factory" },
  { id: "events", label: "Events" },
];

const galleryImages = [
  { id: "1", category: "veterinary", alt: "Surgical instruments collection" },
  { id: "2", category: "veterinary", alt: "A.I. equipment range" },
  { id: "3", category: "veterinary", alt: "Dairy equipment display" },
  { id: "4", category: "veterinary", alt: "Veterinary kits assembled" },
  { id: "5", category: "equestrian", alt: "Premium leather saddles" },
  { id: "6", category: "equestrian", alt: "Bits and stirrups collection" },
  { id: "7", category: "equestrian", alt: "Riding gloves range" },
  { id: "8", category: "equestrian", alt: "Horse rugs display" },
  { id: "9", category: "factory", alt: "CNC machining center" },
  { id: "10", category: "factory", alt: "Quality control inspection" },
  { id: "11", category: "factory", alt: "Hand finishing workshop" },
  { id: "12", category: "factory", alt: "Export packaging area" },
  { id: "13", category: "events", alt: "Trade show booth" },
  { id: "14", category: "events", alt: "Client visit" },
  { id: "15", category: "events", alt: "Award ceremony" },
  { id: "16", category: "veterinary", alt: "Hoof care instruments" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="page-wrap">
          <div className="section-kicker">Our Work</div>
          <h1>Photo<br /><em>Gallery.</em></h1>
          <p>Explore our products, manufacturing facility, and company events.</p>
        </div>
      </section>

      <section className="section page-wrap">
        <GalleryGrid categories={galleryCategories} images={galleryImages} />
      </section>
    </>
  );
}
