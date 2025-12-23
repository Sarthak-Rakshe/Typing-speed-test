export function renderTest({ username, timeInSec }) {
  document.getElementById("input").remove();
  const rootDiv = document.getElementById("app");

  //Navbar
  const navbar = document.createElement("div");
  navbar.id = "navbar";

  const usernameDisplay = document.createElement("h2");
  usernameDisplay.id = "name-input";
  usernameDisplay.textContent = username;

  const timer = document.createElement("h2");
  timer.id = "time-input";
  timer.textContent = timeInSec;

  navbar.append(usernameDisplay, timer);

  // Typing area
  const typingArea = document.createElement("div");
  typingArea.id = "typing-area";

  const textDisplay = document.createElement("div");
  textDisplay.id = "text-display";

  const caret = document.createElement("div");
  caret.id = "caret";

  typingArea.append(textDisplay, caret);

  rootDiv.append(navbar, typingArea);
  // console.log(timeInSec);
}
