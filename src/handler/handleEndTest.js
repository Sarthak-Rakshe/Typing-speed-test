export function handleEndTest() {
  console.log("test ended");
  document.getElementById("typing-area").remove();
  renderResults();
}
