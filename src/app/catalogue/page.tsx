"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Download, BookOpen, ArrowRight } from "lucide-react";

const FlipBookViewer = dynamic(() => import("@/components/FlipBookViewer"), {
  ssr: false,
  loading: () => (
    <div className="flipbook-loading">
      <div className="flipbook-spinner" />
      <p>Loading catalogue viewer...</p>
    </div>
  ),
});

const catalogues = [
  {
    id: "veterinary",
    label: "Veterinary Instruments",
    pdfUrl: "/catalogue/Vetinary.pdf",
    title: "Veterinary Catalogue",
    description:
      "18 categories including surgical instruments, A.I. equipment, dairy equipment, and more. Product codes T-### format.",
  },
  {
    id: "equestrian",
    label: "Equestrian Equipment",
    pdfUrl: "/catalogue/Equestrian.pdf",
    title: "Equestrian Catalogue",
    description:
      "8 categories including saddles, bits, gloves, rugs, and more. Product codes TI-E-### format.",
  },
];

export default function CataloguePage() {
  const [activeTab, setActiveTab] = useState("veterinary");
  const currentYear = new Date().getFullYear();

  const active = catalogues.find((c) => c.id === activeTab)!;

  return (
    <>
      <section className="inner-hero">
        <div className="page-wrap">
          <div className="section-kicker">Browse</div>
          <h1>
            Product<br />
            <em>Catalogue.</em>
          </h1>
          <p>
            Browse our complete product catalogue online or download the PDF for
            offline reference.
          </p>
        </div>
      </section>

      <section className="flipbook-section">
        <div className="page-wrap">
          <div className="flipbook-tab-bar">
            {catalogues.map((cat) => (
              <button
                key={cat.id}
                className={`flipbook-tab ${activeTab === cat.id ? "active" : ""}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <BookOpen size={16} />
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flipbook-info-row">
            <div className="flipbook-info-text">
              <h2>{active.title}</h2>
              <p>{active.description}</p>
            </div>
            <a
              href={active.pdfUrl}
              download
              className="button button-coral"
            >
              <Download size={17} /> Download PDF
            </a>
          </div>

          <FlipBookViewer
            key={active.id}
            pdfUrl={active.pdfUrl}
            title={active.title}
          />

          <div className="flipbook-hints">
            <div className="flipbook-hint">
              <ArrowRight size={14} />
              Use arrow keys or swipe to flip pages
            </div>
            <div className="flipbook-hint">
              <ArrowRight size={14} />
              Click the fullscreen button for immersive reading
            </div>
            <div className="flipbook-hint">
              <ArrowRight size={14} />
              Zoom in / out for detail inspection
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
