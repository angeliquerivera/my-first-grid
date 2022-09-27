export const visualLines_jsx = `<section className="container">
  <article className="track-wrapper">
    <div className="view-tracks">
      <div className="m-blue">
        Midnight Blue
        <span>grid-column-start: 1</span>
        <span>grid-column-end: 2</span>
        <span>grid-row-start: 1</span>
        <span>grid-row-end: 2</span>
      </div>
      <div className="purple">
        Purple
        <span>grid-column-start: 2</span>
        <span>grid-column-end: 3</span>
        <span>grid-row-start: 1</span>
        <span>grid-row-end: 2</span>
      </div>
      <div className="l-blush">
        Lavender Blush
        <span>grid-column: 1 / 3</span>
        <span>grid-row: 2 / 3</span>
      </div>
      <div className="g-rod">
        Goldenrod
        <span>grid-column: 3 / 5</span>
        <span>grid-row: 1 / 3</span>
      </div>
      <div className="l-pink">
        Light Pink
        <span>grid-column: 1 / span 4</span>
        <span>grid-row: 3 / span 2</span>
      </div>
    </div>
  </article>
</section>`;

export const visualLines_css = `.view-tracks {
  min-height: 600px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0.5rem;

  background-color: forestgreen;
}

.view-tracks > * {
  display: grid;
  place-items: center;
}

.m-blue {
  background-color: midnightblue;

  grid-column-start: 1;
  grid-column-end: 2;

  grid-row-start: 1;
  grid-row-end: 2;
}

.purple {
  background-color: purple;

  grid-column-start: 2;
  grid-column-end: 3;

  grid-row-start: 1;
  grid-row-end: 2;
}

.l-blush {
  background-color: lavenderblush;
  color: black;

  /* COMBINED SYNTAX: <start-line> <end-line> */
  grid-column: 1 / 3;
  grid-row: 2 / 3;
}

.g-rod {
  background-color: goldenrod;
  color: black;
  grid-column: 3 / 5;
  grid-row: 1 / 3;
}

.l-pink {
  background-color: lightpink;
  color: black;

  /* USING SPANS */
  grid-column: span 4;
  grid-row: 3 / span 2;
}`;
