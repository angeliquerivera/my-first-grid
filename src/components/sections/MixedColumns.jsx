import CodeWrapper from "../helpers/CodeWrapper";
import HighlightedCode from "../helpers/HighlightedCode";

import {
  mixedColumns_jsx,
  mixedColumns_css,
} from "../../sample-code/ex-mixed-sizing";

export default function MixedColumns() {
  return (
    <article>
      <header className="container">
        <h2>Mixed Column Sizing</h2>
      </header>

      <section className="container">
        <div className="mixed-columns example">
          <div>100px</div>
          <div>25%</div>
          <div>1fr</div>
          <div>2fr</div>
        </div>
      </section>

      <section className="container">
        <p>
          fr is calculated based on the remaining space when combined with other
          length values.
        </p>
        <p>
          In the example above, 100px and 25% would be subtracted from the
          available space before the size of fr is calculated.
        </p>
        <code>1fr = (width of grid - 100px - 25% width of grid) / 3</code>
      </section>

      <section className="container">
        <CodeWrapper sections={2}>
          <HighlightedCode
            exampleCode={mixedColumns_jsx}
            codeLang={"jsx"}
            codeLabel={"MixedColumns.jsx"}
          />
          <HighlightedCode
            exampleCode={mixedColumns_css}
            codeLang={"css"}
            codeLabel={"mixedColumns.css"}
          />
        </CodeWrapper>
      </section>
    </article>
  );
}
