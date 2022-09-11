import {
    ResultComponent
} from "../components/result.component.js.js";
import {
    CSSComponent
} from "../components/css.component.js";
import {
    HTMLComponent
} from "../components/html.component.js";
import {
    JSComponent
} from "../components/js.component.js";

const resultComponent = document.querySelector("[data-result]");
const cssComponent = document.querySelector("[data-css]");
const htmlComponent = document.querySelector("[data-html]");
const jsComponent = document.querySelector("[data-js]");

new ResultComponent(resultComponent);
new CSSComponent(cssComponent);
new HTMLComponent(htmlComponent);
new JSComponent(jsComponent);