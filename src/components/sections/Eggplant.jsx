import CodeWrapper from "../helpers/CodeWrapper";
import HighlightedCode from "../helpers/HighlightedCode";

import { eggplant_jsx, eggplant_css } from "../../sample-code/ex-eggplant";

export default function Eggplant() {
  return (
    <article>
      <header className="container">
        <h2>True Centering an Eggplant</h2>
      </header>

      <section className="container">
        <div className="true-center example">🍆</div>
      </section>

      <section className="container">
        <CodeWrapper sections={2}>
          <HighlightedCode
            exampleCode={eggplant_jsx}
            codeLang={"jsx"}
            codeLabel={"Eggplant.jsx"}
          />
          <HighlightedCode
            exampleCode={eggplant_css}
            codeLang={"css"}
            codeLabel={"eggplant.css"}
          />
        </CodeWrapper>
      </section>
    </article>
  );
}
