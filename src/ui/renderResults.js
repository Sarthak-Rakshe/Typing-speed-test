export function renderResults({ rawWPM, accuracy, WPM }) {
  const rootDiv = document.getElementById("app");
  const resultDiv = document.createElement("div");
  resultDiv.id = "results";
  resultDiv.classList.add("result");

  const rawWPMEle = document.createElement("label");
  rawWPMEle.textContent = "Raw WPM : " + rawWPM;

  const accuracyEle = document.createElement("label");
  accuracyEle.textContent = "Accuracy : " + accuracy;

  const WPMEle = document.createElement("label");
  WPMEle.textContent = "WPM : " + WPM;

  resultDiv.append(rawWPMEle, accuracyEle, WPMEle);

  rootDiv.appendChild(resultDiv);
}
