export function getUserInputs() {
  let username = "";
  let time = 60;

  const usernameInput = document.getElementById("username");
  const timeInput = document.getElementById("time");
  if (!usernameInput || !timeInput) {
    throw new Error("Either of the user inputs are not defined");
  }

  username = usernameInput.value.trim();
  time = timeInput.value.trim();

  if (!username || !time) {
    throw new Error("Empty input");
  }
  return { username, time };
}
