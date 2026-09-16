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
      <section className="flipbook-section">
        <div className="page-wrap">
          <div className="skeleton skeleton-flipbook" />
        </div>
      </section>
    </>
  );
}
