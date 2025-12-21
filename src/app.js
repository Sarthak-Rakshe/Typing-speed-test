import { handleTestStart } from "./handler/handleTestStart.js";
import { testStart } from "./ui/testStart.js";

export async function initApp() {
  console.log("App initialized");
  handleTestStart();
  // testStart();
  // const sentenceLength = document.getElementById("sentenceLength");
  // const button = document.getElementById("button");
  // button.addEventListener("click", () => {
  //   const count = Number(sentenceLength.value);
  //   if (count == 0) {
  //     alert("Enter valid number");
  //   }
  //   renderWords(count);
  // });
}
