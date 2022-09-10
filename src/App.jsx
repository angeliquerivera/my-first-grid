import CodeWrapper from "./components/helpers/CodeWrapper";
import HighlightedCode from "./components/helpers/HighlightedCode";
import { eggplant_jsx } from "./sample-code/ex-eggplant";

export default function App() {
  return (
    <main>
      <section className="container example">
        <h1>Learning CSS Grid</h1>
      </section>
      <section className="container example grid true-center">🍆</section>
      <section className="grid container example">
        <CodeWrapper>
          <HighlightedCode
            codeLang={"jsx"}
            codeLabel={"Eggplant.jsx"}
            exampleCode={eggplant_jsx}
          />
        </CodeWrapper>
      </section>
    </main>
  );
}
