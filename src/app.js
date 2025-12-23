import { handleStart } from "./handler/handleStart";

export async function initApp() {
  console.log("App initialized");
  const startButton = document.getElementById("start-button");
  if (!startButton) {
    throw new Error("start button not found");
  }

  startButton.addEventListener("click", handleStart);
}
