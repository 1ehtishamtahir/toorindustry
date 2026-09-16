"use client";
import { Mail, MessageCircle, Send, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Product } from "@/data/products";
import { SITE } from "@/lib/config";

const inquiryKey = "toor-inquiry-list";

export default function FloatingContact() {
  const [items, setItems] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sync = () => {
      try {
        setItems(JSON.parse(localStorage.getItem(inquiryKey) || "[]"));
      } catch {
        setItems([]);
      }
    };
    sync();
    window.addEventListener("toor-inquiry-change", sync);
    return () => window.removeEventListener("toor-inquiry-change", sync);
  }, []);

  const mailBody = items
    .map((item) => `- ${item.name} (${item.sku})`)
    .join("%0D%0A");

  return (
    <>
      <div className="floating-contact" aria-label="Contact options">
        <button onClick={() => setOpen(true)} className="inquiry-float">
          <Send size={17} />
          <span>
            Inquiry list {items.length > 0 && <b>{items.length}</b>}
          </span>
        </button>
        <a
          href={SITE.whatsapp()}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
      </div>

      {open && (
        <div className="inquiry-overlay" onClick={() => setOpen(false)}>
          <div
            className="inquiry-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="inquiry-close"
              onClick={() => setOpen(false)}
              aria-label="Close inquiry list"
            >
              <X size={18} />
            </button>
            <div className="section-kicker">Your shortlist</div>
            <h2>Inquiry list</h2>
            {items.length === 0 ? (
              <p>
                Your list is empty. Add products from the catalogue to request a
                quote.
              </p>
            ) : (
              <>
                <p>
                  {items.length} product{items.length === 1 ? "" : "s"} ready to
                  discuss.
                </p>
                <ul>
                  {items.map((item) => (
                    <li key={item.slug}>
                      <span>{item.name}</span>
                      <small>{item.sku}</small>
                    </li>
                  ))}
                </ul>
                <a
                  className="button button-coral"
                  href={`mailto:${SITE.email}?subject=Product quotation request&body=Hello ${SITE.name},%0D%0A%0D%0AI would like a quotation for:%0D%0A${mailBody}%0D%0A%0D%0AThank you.`}
                >
                  Email quotation request <Mail size={15} />
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
