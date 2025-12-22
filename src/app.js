import { handleStart } from "./handler/handleStart";
import { handleWords } from "./handler/handleWords";
import { wordService } from "./services/wordService";

export async function initApp() {
  console.log("App initialized");
  const startButton = document.getElementById("start-button");
  if (!startButton) {
    throw new Error("start button not found");
  }

  function onStartClick(event) {
    handleStart();
    handleWords();
  }
  startButton.addEventListener("click", onStartClick);
  // handleWords();
}
