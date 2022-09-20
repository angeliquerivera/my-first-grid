export const mixedColumns_jsx = `<section className="container">
  <div className="mixed-columns example">
    <div>100px</div>
    <div>25%</div>
    <div>1fr</div>
    <div>2fr</div>
  </div>
</section>`;

export const mixedColumns_css = `.mixed-columns {
  display: grid;
  grid-template-columns: 100px 25% 1fr 2fr;
  gap: 1rem;
}

.mixed-columns div {
  display: grid;
  place-items: center;
  background-color: darkslategray;
  height: 100px;
}`;
