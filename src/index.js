import './style.css';
import {
    ResultComponent
} from './components/result.component';
import {
    CSSComponent
} from './components/css.component';
import {
    HTMLComponent
} from './components/html.component';
import {
    JSComponent
} from './components/js.component';

const components = {
    resultComponent: document.querySelector('[data-result]'),
    cssComponent: document.querySelector('[data-css]'),
    htmlComponent: document.querySelector('[data-html]'),
    jsComponent: document.querySelector('[data-js]')
};

new ResultComponent(components.resultComponent);
new CSSComponent(components.cssComponent);
new HTMLComponent(components.htmlComponent);
new JSComponent(components.jsComponent);

const maximizeButton = document.querySelector('button.maximize-btn');
const bottomContainer = document.querySelector('.bottom-container');
const inputs = {
    cssInput: document.querySelector('[data-css] textarea'),
    htmlInput: document.querySelector('[data-html] textarea'),
    jsInput: document.querySelector('[data-js] textarea')
};

const lastSession = JSON.parse(window.localStorage.getItem('data')) || false;

Object.values(inputs).forEach(element => {
    element.addEventListener('input', () => update());
});

// i think on input works better but if it's only wanted on 'run' button click, above forEach can be commented out.

document.querySelector('.run-btn').addEventListener('click', () => update());

const update = () => {
    let inputValues = {
        cssValue: inputs.cssInput.value,
        jsValue: inputs.jsInput.value,
        htmlValue: inputs.htmlInput.value,
    }

    let preview = document.getElementById("preview").contentWindow.document;
    let codeTemplate = `
    <!DOCTYPE html>
        <html>
            <head>
                <style>${ inputValues.cssValue }</style>
            <body>
                ${ inputValues.htmlValue }
                <script>${ inputValues.jsValue }</script>
            </body>
        </html>`
    preview.open();
    preview.write(codeTemplate);
    preview.close();

    setStorage(inputValues);
};

const setStorage = (inputValues) => {
    window.localStorage.setItem('data', JSON.stringify(inputValues));
}

if (lastSession) {
    inputs.cssInput.value = lastSession.cssValue;
    inputs.jsInput.value = lastSession.jsValue;
    inputs.htmlInput.value = lastSession.htmlValue;

    update();
}

maximizeButton.addEventListener('click', () => {
    if (getComputedStyle(bottomContainer).display === 'flex') {
        bottomContainer.style.display = 'none';
        maximizeButton.textContent = 'Minimize';
    } else {
        bottomContainer.style.display = 'flex';
        maximizeButton.textContent = 'Maximize';
    } 
});