import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, COMPANY } from "@/lib/config";
import { veterinaryCategories, equestrianCategories } from "@/data/products";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="page-wrap" style={{ padding: "48px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {/* Company Info */}
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 16px" }}>{SITE.name}</h3>
            <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6, margin: "0 0 16px" }}>
              Leading manufacturers and exporters of top quality Veterinary and
              Equestrian instruments since {COMPANY.founded}.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13, color: "#94a3b8" }}>
              <p style={{ display: "flex", alignItems: "center", gap: 8, margin: 0 }}>
                <Phone size={14} /> {SITE.phone}
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: 8, margin: 0 }}>
                <Mail size={14} /> {SITE.email}
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: 8, margin: 0 }}>
                <MapPin size={14} /> {SITE.address.city}, {SITE.address.province}, {SITE.address.country}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 16px" }}>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, fontSize: 13, color: "#94a3b8" }}>
              <li><Link href="/about" style={{ transition: "color .3s" }}>About Us</Link></li>
              <li><Link href="/products" style={{ transition: "color .3s" }}>Products</Link></li>
              <li><Link href="/catalogue" style={{ transition: "color .3s" }}>Catalogue</Link></li>
              <li><Link href="/factory" style={{ transition: "color .3s" }}>Factory View</Link></li>
              <li><Link href="/gallery" style={{ transition: "color .3s" }}>Gallery</Link></li>
              <li><Link href="/contact" style={{ transition: "color .3s" }}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Veterinary Categories */}
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 16px" }}>Veterinary</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, fontSize: 13, color: "#94a3b8" }}>
              {veterinaryCategories.slice(0, 8).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/products/veterinary/${cat.slug}`} style={{ transition: "color .3s" }}>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Equestrian Categories */}
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 16px" }}>Equestrian</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, fontSize: 13, color: "#94a3b8" }}>
              {equestrianCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/products/equestrian/${cat.slug}`} style={{ transition: "color .3s" }}>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
        <div className="page-wrap" style={{ padding: "16px 0", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "#64748b" }}>
          <p style={{ margin: 0 }}>&copy; 1960–{currentYear} {SITE.name}. All rights reserved.</p>
          <p style={{ margin: 0 }}>Manufactured in {SITE.address.city}, {SITE.address.country}</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          footer > div:first-child > div { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          footer > div:first-child > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
