export const multipleTracks_jsx = `<section className="container">
  <article className="multiple-tracks">
    <div>1fr</div>
    <div>2fr</div>
    <div>1fr</div>
    <div>2fr</div>
    <div>1fr</div>
    <div>2fr</div>
  </article>
</section>`;

export const multipleTracks_css = `.multiple-tracks {
  display: grid;
  grid-template-columns: repeat(3, 1fr 2fr);
  gap: 0.5rem;
}

.multiple-tracks div {
  display: grid;
  place-items: center;

  background-color: mediumturquoise;
  color: black;
  height: 100px; 
}`;
