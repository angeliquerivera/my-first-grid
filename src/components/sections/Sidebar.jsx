/**
 * libraries/node_modules
 * components
 * util functions/hooks
 * data constants
 */

import CodeWrapper from "../helpers/CodeWrapper";
import HighlightedCode from "../helpers/HighlightedCode";

import { sidebar_jsx, sidebar_css } from "../../sample-code/ex-sidebar";

export default function Sidebar() {
  return (
    <article>
      <section className="container">
        <h2>Sidebar</h2>
      </section>

      <section className="container">
        <div className="sidebar example">
          <nav>
            <h3>Pages</h3>
            <ul>
              <li>
                <a href="#1">Link 1</a>
              </li>
              <li>
                <a href="#2">Link 2</a>
              </li>
              <li>
                <a href="#3">Link 3</a>
              </li>
            </ul>
          </nav>
          <article>
            <h3>Favorite Frostings</h3>
            <p>
              Cupcake ipsum dolor sit amet gummi bears I love. Gingerbread
              pastry I love marshmallow I love candy canes gummi bears I love
              jelly-o. I love chocolate bar pastry fruitcake sweet chocolate bar
              bear claw. Jelly beans tiramisu oat cake chocolate cake carrot
              cake tart tootsie roll cotton candy cheesecake. Sesame snaps candy
              chupa chups I love macaroon gingerbread candy. Pastry pie
              gingerbread fruitcake I love cake. I love wafer halvah wafer
              marzipan cookie. Lollipop candy pudding carrot cake I love cake
              pudding gummies. Gingerbread cheesecake I love oat cake pudding
              croissant brownie. Sweet roll lemon drops sweet carrot cake
              pudding cheesecake.
            </p>
            <p>
              Brownie bear claw jelly-o halvah marshmallow cookie. Ice cream
              sweet roll cupcake marshmallow chocolate candy. Chocolate bar
              cupcake candy canes marzipan marshmallow topping icing gummi bears
              gummi bears. Donut candy oat cake cotton candy caramels marzipan.
              Tiramisu cake toffee gingerbread caramels dragée carrot cake
              dragée cake. Biscuit sweet sugar plum I love cake I love macaroon
              apple pie. Topping jelly beans gummi bears jelly-o chupa chups
              jujubes liquorice. Cupcake bear claw jelly beans gingerbread
              chocolate bar halvah bear claw pudding cake. Bonbon candy
              liquorice chocolate cake bear claw candy canes biscuit toffee
              tootsie roll. Halvah candy canes pudding tiramisu I love lollipop.
            </p>
          </article>
        </div>
      </section>

      <section className="container">
        <CodeWrapper sections={2}>
          <HighlightedCode
            exampleCode={sidebar_jsx}
            codeLang={"jsx"}
            codeLabel="Sidebar.jsx"
          />
          <HighlightedCode
            exampleCode={sidebar_css}
            codeLang={"css"}
            codeLabel="sidebar.css"
          />
        </CodeWrapper>
      </section>
    </article>
  );
}
