import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factory View",
  description:
    "Take a virtual tour of Toor Industries manufacturing facility in Sialkot, Pakistan. See how our veterinary and equestrian instruments are made.",
};

const factorySections = [
  {
    title: "Raw Material Warehouse",
    description:
      "We source premium-grade stainless steel, carbon steel, and leather from certified suppliers. All materials undergo quality inspection upon arrival.",
  },
  {
    title: "CNC Machining",
    description:
      "State-of-the-art CNC machines ensure precision manufacturing with tolerances measured in microns. Every instrument starts with accurate machining.",
  },
  {
    title: "Hand Finishing",
    description:
      "Skilled craftsmen hand-finish each instrument, ensuring smooth edges, proper alignment, and the attention to detail that machines cannot replicate.",
  },
  {
    title: "Quality Control",
    description:
      "Multi-stage quality inspection at every production step. Instruments are tested for durability, precision, and compliance with international standards.",
  },
  {
    title: "Assembly & Packaging",
    description:
      "Final assembly, sterilization, and professional packaging. Each product is individually inspected before shipment.",
  },
  {
    title: "Export Warehouse",
    description:
      "Climate-controlled storage for finished goods. Orders are carefully packed for international shipping with appropriate labeling and documentation.",
  },
];

export default function FactoryPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="page-wrap">
          <div className="section-kicker">Our Facility</div>
          <h1>Factory<br /><em>View.</em></h1>
          <p>Located in Sialkot, Pakistan — the surgical instruments capital of
            the world — our modern facility combines traditional craftsmanship
            with advanced technology.</p>
        </div>
      </section>

      <section className="section page-wrap">
        <div className="intro-grid">
          <div>
            <div className="section-kicker">Manufacturing</div>
            <h2 style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>Manufacturing<br /><span>Excellence.</span></h2>
          </div>
          <div>
            <p style={{ color: "#64748b", lineHeight: 1.7, marginBottom: 16 }}>
              Our 20,000+ sq ft facility houses modern CNC machines, hand
              finishing stations, and a dedicated quality control laboratory.
              We combine traditional Sialkot craftsmanship with contemporary
              manufacturing technology.
            </p>
            <p style={{ color: "#64748b", lineHeight: 1.7 }}>
              Every instrument that leaves our factory has passed through
              multiple quality checkpoints and meets the standards expected by
              veterinary and equestrian professionals worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="page-wrap">
          <div className="section-heading" style={{ marginBottom: 50 }}>
            <div>
              <div className="section-kicker">Production</div>
              <h2 style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>Our Production<br /><span>Process.</span></h2>
            </div>
          </div>
          <div className="process-timeline" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {factorySections.map((section, index) => (
              <div
                key={section.title}
                className="process-card"
                style={{ background: "#fff", padding: 28, border: "1px solid var(--line)", borderRadius: 12 }}
              >
                <div style={{
                  width: 40, height: 40, background: "var(--ink)", color: "#fff",
                  borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: 14, marginBottom: 16
                }}>
                  {index + 1}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 8px" }}>{section.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="page-wrap cta-inner">
          <div className="section-kicker">Visit Us</div>
          <h2>See our facility<br /><em>in person.</em></h2>
          <p>We welcome visits from partners and distributors. Contact us to schedule a tour.</p>
        </div>
      </section>
    </>
  );
}
