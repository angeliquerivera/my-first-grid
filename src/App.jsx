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

      <section className="container example grid tic-tac-toe">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </section>

      <section className="container example grid mixed-columns">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>

      {/* <section className="container example grid">
        <CodeWrapper sections={2}>
          <HighlightedCode
            exampleCode={eggplant_jsx}
            codeLang={"jsx"}
            codeLabel={"Eggplant.jsx"}
          />
          <HighlightedCode
            exampleCode={eggplant_jsx}
            codeLang={"jsx"}
            codeLabel={"Eggplant.jsx"}
          />
        </CodeWrapper>
      </section> */}
    </main>
  );
}
