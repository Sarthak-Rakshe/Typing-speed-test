import { typingTrackerService } from "../services/typingTrackerService";

const typingSpace = document.getElementById("typingSpace");
typingSpace.focus();
typingSpace.addEventListener("keyDown", handleKeypress);

export function handleKeypress(event) {
  if (!keyPressedEvent) {
    throw new Error("key press event is null");
  }
  const result = typingTrackerService({
    keydownEvent: event,
    timeRemaining,
  });
}
