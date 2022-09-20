import CodeWrapper from "../helpers/CodeWrapper";
import HighlightedCode from "../helpers/HighlightedCode";

import { ticTacToe_jsx, ticTacToe_css } from "../../sample-code/ex-tic-tac-toe";

export default function TicTacToe() {
  return (
    <article>
      <header className="container">
        <h2>Tic-Tac-Toe Board</h2>
      </header>

      <section className="container">
        <div className="tic-tac-toe example">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
      </section>

      <section className="container">
        <CodeWrapper sections={2}>
          <HighlightedCode
            exampleCode={ticTacToe_jsx}
            codeLang={"jsx"}
            codeLabel={"TicTacToe.jsx"}
          />
          <HighlightedCode
            exampleCode={ticTacToe_css}
            codeLang={"css"}
            codeLabel={"tic-tac-toe.css"}
          />
        </CodeWrapper>
      </section>
    </article>
  );
}
