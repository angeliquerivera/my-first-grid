import CodeWrapper from "../helpers/CodeWrapper";
import HighlightedCode from "../helpers/HighlightedCode";

import {
  visualLines_jsx,
  visualLines_css,
} from "../../sample-code/ex-visual-lines";

export default function VisualLines() {
  return (
    <article>
      <header className="container">
        <h2>Visualizing Grid Tracks/Lines</h2>
      </header>
      <section className="container">
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
      </section>
      <section className="container">
        <p>
          Grid items span only one column and row track by default. We can
          dictate a grid item's width through columns taken or height through
          rows taken by using certain CSS properties to position them.
        </p>
        <h3>Explicit Starts and Ends</h3>
        <ul>
          <li>grid-column-start</li>
          <li>grid-column-end</li>
          <li>grid-row-start</li>
          <li>grid-row-end</li>
        </ul>
        <h3>Combined Starts and Ends (Using Lines)</h3>
        <ul>
          <li>grid-column: 1 / 5</li>
          <li>grid-row: 2 / 4</li>
        </ul>
        <h3>Combined Starts and Ends (Using Spans)</h3>
        <ul>
          <li>grid-column: span 4</li>
          <li>grid-row: 2 / span 2</li>
        </ul>
      </section>

      <section className="container">
        <CodeWrapper sections={2}>
          <HighlightedCode
            exampleCode={visualLines_jsx}
            codeLang={"jsx"}
            codeLabel={"VisualLines.jsx"}
          />
          <HighlightedCode
            exampleCode={visualLines_css}
            codeLang={"css"}
            codeLabel={"visual-lines.css"}
          />
        </CodeWrapper>
      </section>
    </article>
  );
}
