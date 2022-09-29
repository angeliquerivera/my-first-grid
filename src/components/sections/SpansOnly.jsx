export default function SpansOnly() {
  return (
    <article>
      <header className="container">
        <h2>Spans Only</h2>
      </header>
      <section className="container">
        <article className="spans-only">
          {/* 6 cols wide, 2 rows tall */}

          <div className="skinny">1</div>
          <div className="thicc">2</div>
          <div className="skinny">3</div>
          <div className="thicc">4</div>

          {/* 6 cols wide, 2 rows tall */}
          <div className="thicc">5</div>
          <div className="skinny">6</div>
          <div className="skinny">7</div>
          <div className="thicc">8</div>

          {/* NOT 6 columns */}
          <div className="thicc">9</div>
          <div className="skinny">10</div>
          <div className="thicc">11</div>
          <div className="thicc">12</div>
        </article>
      </section>
    </article>
  );
}
