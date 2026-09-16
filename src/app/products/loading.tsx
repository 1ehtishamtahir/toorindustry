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
        <div className="skeleton-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton skeleton-card-art" />
              <div className="skeleton-card-body">
                <div className="skeleton skeleton-card-tag" />
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
