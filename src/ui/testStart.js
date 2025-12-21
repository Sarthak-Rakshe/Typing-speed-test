export function testStart(onStart) {
  const testStartEle = document.getElementById("startTest");

  const inputPrompt = document.createElement("div");
  inputPrompt.id = "inputPrompt";

  const usernameInput = document.createElement("input");
  usernameInput.id = "username";
  usernameInput.type = "text";
  usernameInput.placeholder = "Enter username";

  const timeInput = document.createElement("input");
  timeInput.id = "time";
  timeInput.type = "number";
  timeInput.placeholder = "Time in seconds";
  timeInput.min = "1";

  const submitButton = document.createElement("button");
  submitButton.textContent = "Start Test";
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    onStart();
    testStartEle.remove();
  });

  inputPrompt.append(usernameInput, timeInput, submitButton);

  testStartEle.appendChild(inputPrompt);
}
