export const sidebar_jsx = `<section className="container">
  <div className="sidebar example">
    <nav>
      <h3>Pages</h3>
      <ul>
        <li>
          <a href="#1">Link 1</a>
        </li>
        <li>
          <a href="#2">Link 2</a>
        </li>
        <li>
          <a href="#3">Link 3</a>
        </li>
      </ul>
    </nav>
    <article>
      <h3>Favorite Frostings</h3>
      <p>
        Cupcake ipsum dolor sit amet ...
      </p>
      <p>
        Brownie bear claw jelly-o halvah ...
      </p>
    </article>
  </div>
</section>`;

export const sidebar_css = `.sidebar {
  display: grid;
  grid-template-columns: minmax(150px, 25%) 1fr;
}

.sidebar nav,
.sidebar article {
  padding: 1.5rem;
  min-height: 400px;
}

.sidebar nav {
  background-color: darkgreen;
}

.sidebar article {
  background-color: palevioletred;
}`;
