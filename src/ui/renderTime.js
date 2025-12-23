export function renderTime(timeInSec) {
  const timer = document.getElementById("time-input");
  if (timeInSec == null) {
    throw new Error("Invalid time, time must be in seconds");
  }
  timer.textContent = timeInSec;
}
