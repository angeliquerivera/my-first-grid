export default function LayeringGridItems() {
  return (
    <article>
      <header className="container">
        <h2>Layering Grid Items</h2>
      </header>
      <section className="container">
        <article className="layered-items">
          <div id="pos1">1</div>
          <div id="pos2">2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div id="overlay">7</div>
        </article>
      </section>
    </article>
  );
}
