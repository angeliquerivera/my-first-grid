export default function SpansOnly() {
  return (
    <article>
      <header className="container">
        <h2>Spans Only</h2>
      </header>
      <section className="container">
        <article className="spans-only">
          {/* 6 cols wide, 2 rows tall */}

          <div className="skinny"> grid-column: span 1; grid-row: span 2;</div>
          <div className="thicc"> grid-column: span 2; grid-row: span 2;</div>
          <div className="skinny"> grid-column: span 1; grid-row: span 2;</div>
          <div className="thicc"> grid-column: span 2; grid-row: span 2;</div>

          {/* 6 cols wide, 2 rows tall */}
          <div className="thicc"> grid-column: span 2; grid-row: span 2;</div>
          <div className="skinny"> grid-column: span 1; grid-row: span 2;</div>
          <div className="skinny"> grid-column: span 1; grid-row: span 2;</div>
          <div className="thicc"> grid-column: span 2; grid-row: span 2;</div>

          {/* NOT 6 columns */}
          <div className="thicc">thicc</div>
          <div className="skinny">skinny</div>
          <div className="thicc">thicc</div>
          <div className="thicc">thicc</div>
        </article>
      </section>
    </article>
  );
}
