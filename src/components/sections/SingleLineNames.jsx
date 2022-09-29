export default function SingleLineNames() {
  return (
    <article>
      <header className="container">
        <h2>Single Line Names</h2>
      </header>
      <section className="container">
        <p>
          Grid lines can be named when defining the grid using
          grid-template-rows or grid-template-columns. To name lines, you add
          the line name inside of square brackets. The names can be anything.
          Once the lines have names, you can use the name of a line to place an
          item instead of its line number.
        </p>
      </section>
      <section className="container">
        <article className="single-line-name">
          <div className="special"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
      </section>
    </article>
  );
}
