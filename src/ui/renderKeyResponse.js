export function renderKeyResponse({ isCorrectChar, currentIndex }) {
  const char = document.querySelector(
    `#text-display span[data-index="${currentIndex}"]`
  );

  if (!isCorrectChar) {
    char.classList.add("wrong-char");
  } else {
    char.classList.add("typed");
  }
}
