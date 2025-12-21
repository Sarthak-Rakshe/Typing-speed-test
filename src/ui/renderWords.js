import { getWords } from "../services/wordsService.js";

export function renderWords(timeInSec) {
  const wordsList = getWords(timeInSec * 3);
  console.log("Rendering word:", wordsList);
  const wordDiv = document.createElement("div");
  wordDiv.textContent = wordsList.join(" ");
  document.getElementById("app").appendChild(wordDiv);
}
