export function ResultComponent(resultComponent) {
  resultComponent.innerHTML = 
  `<section class="result-header">
    <h1>Result</h1>
    <section class="header-buttons">
      <button class="history-btn">History</button><button class="save-btn" type="button">Save</button><button class="run-btn" type="button">Run</button>
    </section>
  </section>
  <section class="iframe">
    <button class="maximize-btn" type="button">Maximize</button>
    <iframe id="preview" frameborder="0">
  </iframe></section>`;
}