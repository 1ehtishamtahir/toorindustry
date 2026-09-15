"use client";

import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Toor+Industries/@32.5,74.3,15z";
const EMBED_MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.5!2d74.3!3d32.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDMwJzAwLjAiTiA3NMKwMTgnMDAuMCJF!5e0!3m2!1sen!2spk!4v1";

export default function ContactPage() {
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
                      Toor Industries<br />
                      31-622 Greenwood Street<br />
                      Sialkot, Punjab, Pakistan
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Phone size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <a href="tel:+923006126063">+92 300 6126063</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Mail size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:info@toorindustries.com">info@toorindustries.com</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Clock size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3>Business Hours</h3>
                    <p>
                      Monday – Saturday: 9:00 AM – 6:00 PM (PKT)<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-maps-btn"
              >
                Open in Maps <ExternalLink size={14} />
              </a>
            </div>

            <div className="contact-map-card">
              <iframe
                src={EMBED_MAP_URL}
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
