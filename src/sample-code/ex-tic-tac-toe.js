export const ticTacToe_jsx = `<section className="container tic-tac-toe">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</section>`;

export const ticTacToe_css = `.tic-tac-toe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
}

.tic-tac-toe div {
  background-color: darkred;
  height: 200px;

  display: grid;
  place-items: center;
}`;
