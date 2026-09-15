import type { Metadata } from "next";
import { Award, Globe, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Toor Industries — a leading manufacturer of veterinary and equestrian instruments since 1960, based in Sialkot, Pakistan.",
};

const timeline = [
  {
    year: "1960",
    title: "Founded",
    description:
      "Toor Industries was established by Ch. Zulfiqar Ali Toor in Sialkot, Pakistan, beginning as a small workshop producing veterinary instruments.",
  },
  {
    year: "1980",
    title: "Export Expansion",
    description:
      "Expanded into international markets, establishing partnerships with distributors across Asia, the Middle East, and Africa.",
  },
  {
    year: "2000",
    title: "Modern Manufacturing",
    description:
      "Upgraded to modern manufacturing facilities with CNC machinery and precision engineering capabilities.",
  },
  {
    year: "2010",
    title: "Equestrian Line Launch",
    description:
      "Launched dedicated equestrian equipment line including saddles, bits, and accessories for international markets.",
  },
  {
    year: "2020",
    title: "Global Reach",
    description:
      "Expanded to 40+ countries with a product catalog of over 500 varieties serving veterinary and equestrian professionals worldwide.",
  },
];

const values = [
  {
    title: "Quality First",
    description:
      "Every instrument undergoes rigorous quality testing. We use premium materials including surgical-grade stainless steel and certified leather.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Focus",
    description:
      "We work closely with distributors and importers to understand market needs and deliver products that meet local requirements.",
    icon: Users,
  },
  {
    title: "Innovation",
    description:
      "Continuous investment in modern manufacturing technology and product development to stay ahead of industry trends.",
    icon: Award,
  },
  {
    title: "Global Partnership",
    description:
      "We believe in long-term relationships with our partners, offering competitive pricing, OEM services, and dedicated support.",
    icon: Globe,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="page-wrap">
          <div className="section-kicker">Our Story</div>
          <h1>About<br /><em>Toor Industries.</em></h1>
          <p>Over six decades of craftsmanship, innovation, and trust in
            veterinary and equestrian instrument manufacturing.</p>
        </div>
      </section>

      <section className="section page-wrap">
        <div className="intro-grid">
          <div>
            <div className="section-kicker">Since 1960</div>
            <h2 style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>Founded by<br /><span>Ch. Zulfiqar Ali Toor.</span></h2>
          </div>
          <div>
            <p style={{ color: "#64748b", lineHeight: 1.7, marginBottom: 16 }}>
              Founded by Ch. Zulfiqar Ali Toor, Toor Industries began as a
              small workshop in Sialkot, Pakistan — a city renowned worldwide
              for its surgical and medical instrument manufacturing heritage.
            </p>
            <p style={{ color: "#64748b", lineHeight: 1.7, marginBottom: 16 }}>
              From humble beginnings, we have grown into a leading manufacturer
              and exporter of veterinary instruments, A.I. equipment, dairy
              equipment, and farrier tools. Our commitment to quality and
              customer satisfaction has earned us the trust of distributors and
              importers in over 40 countries.
            </p>
            <p style={{ color: "#64748b", lineHeight: 1.7 }}>
              Today, we continue to honor our founder&apos;s vision by producing
              instruments that meet the highest standards of precision,
              durability, and functionality — serving veterinary professionals
              and equestrian enthusiasts worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="page-wrap">
          <div className="section-heading" style={{ marginBottom: 40 }}>
            <div>
              <div className="section-kicker">Milestones</div>
              <h2 style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>Our<br /><span>Journey.</span></h2>
            </div>
          </div>
          <div style={{ display: "grid", gap: 24 }}>
            {timeline.map((item) => (
              <div
                key={item.year}
                style={{ display: "flex", gap: 24, alignItems: "flex-start" }}
              >
                <div style={{
                  width: 80, height: 80, background: "var(--ink)", color: "#fff",
                  borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: 14, flexShrink: 0
                }}>
                  {item.year}
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>{item.title}</h3>
                  <p style={{ color: "#64748b", lineHeight: 1.6, margin: 0, fontSize: 14 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-wrap">
        <div className="section-heading" style={{ marginBottom: 50 }}>
          <div>
            <div className="section-kicker">Our Values</div>
            <h2 style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>What drives<br /><span>everything.</span></h2>
          </div>
        </div>
        <div className="reason-grid">
          {values.map((item, i) => (
            <div className="reason-card" key={item.title}>
              <span className="reason-number">0{i + 1}</span>
              <item.icon size={24} strokeWidth={1.5} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="closing-cta">
        <div className="page-wrap cta-inner">
          <div className="section-kicker">Our Belief</div>
          <h2>Quality is not an act,<br /><em>it is a habit.</em></h2>
          <p>We build every instrument as if our own reputation depends on it.</p>
          <p style={{ fontStyle: "italic", opacity: 0.7, marginTop: 8 }}>— Ch. Zulfiqar Ali Toor, Founder (Est. 1960)</p>
        </div>
      </section>
    </>
  );
}
