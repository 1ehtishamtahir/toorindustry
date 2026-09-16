"use client";

import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/config";

export default function ContactPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="page-wrap">
          <div className="section-kicker">Get in Touch</div>
          <h1>
            Contact
            <br />
            <em>Us.</em>
          </h1>
          <p>
            We welcome inquiries from distributors, importers, and wholesale
            dealers worldwide.
          </p>
        </div>
      </section>

      <section className="contact-location-section">
        <div className="page-wrap">
          <div className="contact-location-grid">
            <div className="contact-info-card">
              <div className="contact-info-header">Contact Information</div>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3>Address</h3>
                    <p>
                      {SITE.name}
                      <br />
                      {SITE.address.street}
                      <br />
                      {SITE.address.city}, {SITE.address.province},{" "}
                      {SITE.address.country}
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Phone size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Mail size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3>Email</h3>
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Clock size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3>Business Hours</h3>
                    <p>
                      Monday – Saturday: 9:00 AM – 6:00 PM (PKT)
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={SITE.maps.place}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-maps-btn"
              >
                Open in Maps <ExternalLink size={14} />
              </a>
            </div>

            <div className="contact-map-card">
              <iframe
                src={SITE.maps.embed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${SITE.name} Location`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
