import './style.css';
import { ResultComponent } from "./components/result.component";
import { CSSComponent } from "./components/css.component";
import { HTMLComponent } from "./components/html.component";
import { JSComponent } from "./components/js.component";

const resultComponent = document.querySelector("[data-result]");
const cssComponent = document.querySelector("[data-css]");
const htmlComponent = document.querySelector("[data-html]");
const jsComponent = document.querySelector("[data-js]");

new ResultComponent(resultComponent);
new CSSComponent(cssComponent);
new HTMLComponent(htmlComponent);
new JSComponent(jsComponent);
