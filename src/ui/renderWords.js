export function renderWords(textArray) {
  const textdisplay = document.getElementById("text-display");
  textdisplay.innerHTML = "";

  const chars = textArray.join(" ").split("");
  chars.forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.dataset.index = index;
    span.classList.add(char == +" " ? "space" : "char");

    textdisplay.appendChild(span);
  });
}
