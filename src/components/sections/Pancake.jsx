import CodeWrapper from "../helpers/CodeWrapper";
import HighlightedCode from "../helpers/HighlightedCode";

import { pancake_jsx, pancake_css } from "../../sample-code/ex-pancake";

export default function Pancake() {
  return (
    <article>
      <header className="container">
        <h2>Pancake Stack</h2>
      </header>
      <section className="container">
        <article className="pancake">
          <header>
            <h3>{"T   H   I   C   C   CAKES"}</h3>
          </header>
          <div>
            <p>
              Cupcake ipsum dolor sit amet jujubes I love lollipop muffin. Cake
              cupcake fruitcake cake macaroon apple pie tootsie roll brownie
              tiramisu. Topping sweet muffin caramels jelly beans shortbread
              carrot cake. Muffin cotton candy cake halvah macaroon. I love
              liquorice I love chocolate cake I love bear claw candy canes sugar
              plum. Cheesecake sweet roll tiramisu I love topping gingerbread.
              Pastry pudding sesame snaps sweet toffee pastry cupcake. I love
              jelly-o donut jelly ice cream cake. Cheesecake I love sugar plum
              croissant toffee chocolate bar bonbon. Carrot cake oat cake dragée
              tiramisu fruitcake sweet roll I love chocolate cookie. Sweet roll
              sweet roll cotton candy gummi bears shortbread chocolate. Cotton
              candy wafer jelly pastry carrot cake pudding sesame snaps danish
              sesame snaps. Chocolate chocolate cake lollipop pastry ice cream
              bonbon oat cake muffin. Lemon drops cupcake danish chocolate
              shortbread fruitcake.
            </p>
          </div>
          <footer>
            <p>&copy; AngelCakes LLC 2022</p>
          </footer>
        </article>
      </section>
      <section className="container">
        <CodeWrapper sections="2">
          <HighlightedCode
            exampleCode={pancake_jsx}
            codeLang={"jsx"}
            codeLabel="Pancake.jsx"
          />
          <HighlightedCode
            exampleCode={pancake_css}
            codeLang={"css"}
            codeLabel="pancake.css"
          />
        </CodeWrapper>
      </section>
    </article>
  );
}
