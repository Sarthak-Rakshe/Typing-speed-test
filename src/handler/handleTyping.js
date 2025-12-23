import { typingTrackerService } from "../services/typingTrackerService";
import { moveCaret } from "../ui/moveCaret";

let currentIndex = 0;
let inputString = "";

export function initTyping(originalWordsArr) {
  const typingArea = document.getElementById("typing-area");
  const totalChars = document.querySelectorAll("#text-display span").length;
  // console.log(totalChars);
  typingArea.tabIndex = 0;
  typingArea.focus();

  moveCaret(0);

  typingArea.addEventListener("keydown", (event) => {
    if (event.key === " ") {
      event.preventDefault(); //
    }
    if (event.key.length !== 1 && event.key !== "Backspace") return;

    if (event.key === "Backspace") {
      if (currentIndex > 0) currentIndex--;
      if (!inputString) {
        inputString = inputString.slice(0, -1);
      }
    } else {
      if (currentIndex < totalChars) currentIndex++;
      inputString = inputString + event.key;
    }

    moveCaret(currentIndex);
    const results = typingTrackerService({
      inputText: inputString,
      originalTextArr: originalWordsArr,
    });

    return results;
  });
}
