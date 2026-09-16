export default function Loading() {
  return (
    <>
      <section className="inner-hero">
        <div className="page-wrap">
          <div className="skeleton skeleton-kicker" />
          <div className="skeleton skeleton-title" />
          <div className="skeleton skeleton-text" />
        </div>
      </section>
      <section className="contact-location-section">
        <div className="page-wrap">
          <div className="contact-location-grid">
            <div className="skeleton-card" style={{ padding: 32 }}>
              <div className="skeleton skeleton-card-tag" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="skeleton-contact-row">
                  <div className="skeleton skeleton-contact-icon" />
                  <div style={{ flex: 1 }}>
                    <div className="skeleton skeleton-card-title" style={{ width: "40%" }} />
                    <div className="skeleton skeleton-card-text" />
                  </div>
                </div>
              ))}
            </div>
            <div className="skeleton skeleton-map" />
          </div>
        </div>
      </section>
    </>
  );
}
