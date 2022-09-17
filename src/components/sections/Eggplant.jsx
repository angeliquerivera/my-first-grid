import CodeWrapper from "../helpers/CodeWrapper";
import HighlightedCode from "../helpers/HighlightedCode";

import { eggplant_jsx, eggplant_css } from "../../sample-code/ex-eggplant";

export default function Eggplant() {
  return (
    <>
      <h2>True Centering an Eggplant</h2>
      <section className="container">
        <div className="true-center">🍆</div>
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
            codeLabel={"Eggplant.css"}
          />
        </CodeWrapper>
      </section>
    </>
  );
}
