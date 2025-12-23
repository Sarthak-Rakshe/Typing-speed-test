export function moveCaret(index) {
  const caret = document.getElementById("caret");
  const display = document.getElementById("text-display");

  const spans = display.querySelectorAll("span");

  if (index < 0 || index > spans.length) return;

  // Case 1: at start
  if (index === 0) {
    const first = spans[0];
    const firstRect = first.getBoundingClientRect();
    const containerRect = display.getBoundingClientRect();

    caret.style.left = `${firstRect.left - containerRect.left}px`;
    caret.style.top = `${firstRect.top - containerRect.top}px`;
    return;
  }

  // Case 2: after a character
  const prev = spans[index - 1];
  const prevRect = prev.getBoundingClientRect();
  const containerRect = display.getBoundingClientRect();

  caret.style.left = `${prevRect.right - containerRect.left}px`;
  caret.style.top = `${prevRect.top - containerRect.top}px`;
}
