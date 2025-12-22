export function getUserInputs() {
  const usernameInput = document.getElementById("name-input");
  const timeInput = document.getElementById("time-input");

  if (!usernameInput || !timeInput) {
    throw new Error("No such element present");
  }
  const username = usernameInput.value;
  const timeInSec = timeInput.value;

  if (!username) {
    throw new Error("username cannot be empty");
  }
  if (!timeInSec) {
    throw new Error("time cannot be empty");
  }
  return { username, timeInSec };
}
