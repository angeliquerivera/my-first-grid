import CodeWrapper from "../helpers/CodeWrapper";
import HighlightedCode from "../helpers/HighlightedCode";
import {
  multipleTracks_jsx,
  multipleTracks_css,
} from "../../sample-code/ex-multiple-tracks";
export default function RepeatMultipleTracks() {
  return (
    <article>
      <header className="container">
        <h2>Repeated Multiple Tracks</h2>
      </header>
      <section className="container">
        <article className="multiple-tracks">
          <div>1fr</div>
          <div>2fr</div>
          <div>1fr</div>
          <div>2fr</div>
          <div>1fr</div>
          <div>2fr</div>
        </article>
      </section>
      <section className="container">
        <p>
          The CSS{` repeat() `}function can accept more than one track size
          value if desired.
        </p>
      </section>
      <section className="container">
        <CodeWrapper sections={2}>
          <HighlightedCode
            exampleCode={multipleTracks_jsx}
            codeLang={`jsx`}
            codeLabel={`MultipleTracks.jsx`}
          />
          <HighlightedCode
            exampleCode={multipleTracks_css}
            codeLang={`css`}
            codeLabel={`multiple-tracks.css`}
          />
        </CodeWrapper>
      </section>
    </article>
  );
}
