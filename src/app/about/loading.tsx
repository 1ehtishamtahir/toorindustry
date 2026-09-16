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
      <section className="section page-wrap">
        <div className="section-heading">
          <div>
            <div className="skeleton skeleton-kicker" />
            <div className="skeleton skeleton-title" style={{ width: "70%" }} />
          </div>
          <div>
            <div className="skeleton skeleton-card-text" />
            <div className="skeleton skeleton-card-text" style={{ width: "80%" }} />
          </div>
        </div>
        <div className="skeleton-grid" style={{ marginTop: 60 }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-card-body">
                <div className="skeleton skeleton-card-title" />
                <div className="skeleton skeleton-card-text" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
