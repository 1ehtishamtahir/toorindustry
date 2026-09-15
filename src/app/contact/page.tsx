"use client";

import { useActionState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { submitContactForm } from "./actions";

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    { success: false, message: "" }
  );

  return (
    <>
      <section className="inner-hero">
        <div className="page-wrap">
          <div className="section-kicker">Get in Touch</div>
          <h1>Contact<br /><em>Us.</em></h1>
          <p>We welcome inquiries from distributors, importers, and wholesale
            dealers worldwide.</p>
        </div>
      </section>

      <section className="section page-wrap">
        <div className="intro-grid" style={{ alignItems: "start" }}>
          <div>
            <div className="section-kicker">Send a Message</div>
            <h2 style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>Let&apos;s start<br /><span>a conversation.</span></h2>
            <form action={formAction} style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label htmlFor="name" style={{ display: "block", fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    style={{ width: "100%", padding: "12px 16px", border: "2px solid var(--line)", borderRadius: 10, fontSize: 13, outline: "none", background: "#fff", transition: "border-color .3s" }}
                  />
                </div>
                <div>
                  <label htmlFor="company" style={{ display: "block", fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    style={{ width: "100%", padding: "12px 16px", border: "2px solid var(--line)", borderRadius: 10, fontSize: 13, outline: "none", background: "#fff", transition: "border-color .3s" }}
                  />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label htmlFor="email" style={{ display: "block", fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    style={{ width: "100%", padding: "12px 16px", border: "2px solid var(--line)", borderRadius: 10, fontSize: 13, outline: "none", background: "#fff", transition: "border-color .3s" }}
                  />
                </div>
                <div>
                  <label htmlFor="phone" style={{ display: "block", fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    style={{ width: "100%", padding: "12px 16px", border: "2px solid var(--line)", borderRadius: 10, fontSize: 13, outline: "none", background: "#fff", transition: "border-color .3s" }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="interest" style={{ display: "block", fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Area of Interest *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  style={{ width: "100%", padding: "12px 16px", border: "2px solid var(--line)", borderRadius: 10, fontSize: 13, outline: "none", background: "#fff", transition: "border-color .3s" }}
                >
                  <option value="">Select an option</option>
                  <option value="distributor">Distributor Partnership</option>
                  <option value="import">Import Inquiry</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="oem">OEM / Custom Manufacturing</option>
                  <option value="product">Product Information</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" style={{ display: "block", fontSize: 12, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  style={{ width: "100%", padding: "12px 16px", border: "2px solid var(--line)", borderRadius: 10, fontSize: 13, outline: "none", background: "#fff", resize: "vertical", transition: "border-color .3s" }}
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {state.message && (
                <div style={{
                  padding: "12px 16px", borderRadius: 10, fontSize: 13,
                  background: state.success ? "#f0fdf4" : "#fef2f2",
                  color: state.success ? "#16a34a" : "#dc2626",
                  border: `1px solid ${state.success ? "#bbf7d0" : "#fecaca"}`,
                }}>
                  {state.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="button button-coral"
                style={{ opacity: isPending ? 0.5 : 1, cursor: isPending ? "not-allowed" : "pointer", alignSelf: "flex-start" }}
              >
                {isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div>
            <div className="section-kicker">Contact Information</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 28, marginTop: 12 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, background: "var(--ink)", color: "#fff", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 4px" }}>Address</h3>
                  <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                    Toor Industries<br />
                    31-622 Greenwood Street<br />
                    Sialkot, Punjab, Pakistan
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, background: "var(--ink)", color: "#fff", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 4px" }}>Phone</h3>
                  <a href="tel:+923006126063" style={{ color: "#64748b", fontSize: 13, textDecoration: "none", transition: "color .3s" }}>
                    +92 300 6126063
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, background: "var(--ink)", color: "#fff", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 4px" }}>Email</h3>
                  <a href="mailto:info@toorindustries.com" style={{ color: "#64748b", fontSize: 13, textDecoration: "none", transition: "color .3s" }}>
                    info@toorindustries.com
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, background: "var(--ink)", color: "#fff", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Clock size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 4px" }}>Business Hours</h3>
                  <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                    Monday – Saturday: 9:00 AM – 6:00 PM (PKT)<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 32, height: 240, borderRadius: 12, overflow: "hidden", border: "1px solid var(--line)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.5!2d74.3!3d32.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDMwJzAwLjAiTiA3NMKwMTgnMDAuMCJF!5e0!3m2!1sen!2spk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Toor Industries Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
