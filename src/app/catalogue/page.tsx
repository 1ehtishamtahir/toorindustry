import type { Metadata } from "next";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "Download our complete product catalogue featuring veterinary instruments and equestrian equipment.",
};

export default function CataloguePage() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className="inner-hero">
        <div className="page-wrap">
          <div className="section-kicker">Download</div>
          <h1>Product<br /><em>Catalogue.</em></h1>
          <p>Browse and download our complete product catalogue with detailed
            specifications and images.</p>
        </div>
      </section>

      <section className="section page-wrap" style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", padding: "50px 0" }}>
          <div style={{
            width: 80, height: 80, background: "var(--ink)", color: "#fff",
            borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 24px"
          }}>
            <Download size={36} strokeWidth={1.5} />
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 12px" }}>Complete Product Catalogue</h2>
          <p style={{ color: "#64748b", lineHeight: 1.7, maxWidth: 500, margin: "0 auto 28px" }}>
            Our catalogue includes all veterinary instruments and equestrian
            equipment with detailed specifications, product codes, and
            high-quality images.
          </p>
          <a
            href="/catalogue/toor-industries-catalogue.pdf"
            download
            className="button button-coral"
          >
            <Download size={17} /> Download PDF Catalogue
          </a>
          <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 16 }}>
            PDF Format — Updated {currentYear}
          </p>
        </div>

        <div style={{ marginTop: 40 }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 20px" }}>Catalogue Highlights</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ border: "1px solid var(--line)", borderRadius: 12, padding: 24 }}>
              <h4 style={{ fontWeight: 700, margin: "0 0 8px" }}>Veterinary Instruments</h4>
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                18 categories including surgical instruments, A.I. equipment,
                dairy equipment, and more. Product codes T-### format.
              </p>
            </div>
            <div style={{ border: "1px solid var(--line)", borderRadius: 12, padding: 24 }}>
              <h4 style={{ fontWeight: 700, margin: "0 0 8px" }}>Equestrian Equipment</h4>
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                8 categories including saddles, bits, gloves, rugs, and more.
                Product codes TI-E-### format.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
