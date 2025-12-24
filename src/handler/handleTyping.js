import { moveCaret } from "../ui/moveCaret";

let currentIndex = 0;
let inputString = "";

export function initTyping({ originalWordsArr, typingTrackerServiceInstance }) {
  const typingArea = document.getElementById("typing-area");
  const totalChars = document.querySelectorAll("#text-display span").length;
  const time = document.getElementById("time-input").textContent;

  typingArea.tabIndex = 0;
  typingArea.focus();

  moveCaret(0);

  typingArea.addEventListener("keydown", (event) => {
    if (event.key === " ") {
      event.preventDefault();
    }
    if (event.key.length !== 1 && event.key !== "Backspace") return;

    if (event.key === "Backspace") {
      if (currentIndex > 0) currentIndex--;
      if (inputString.length > 0) {
        inputString = inputString.slice(0, -1);
      }
    } else {
      if (currentIndex < totalChars) currentIndex++;
      inputString = inputString + event.key;
    }

    moveCaret(currentIndex);
  });

  return {
    getInput() {
      return inputString;
    },
  };
}
