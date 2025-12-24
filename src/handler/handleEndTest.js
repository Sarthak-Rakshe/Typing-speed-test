import { renderResults } from "../ui/renderResults";

export function handleEndTest({
  typingTrackerServiceInstance,
  typingInstance,
  originalWordsArr,
}) {
  document.getElementById("typing-area").remove();

  typingTrackerServiceInstance.calculateResults({
    inputText: typingInstance.getInput(),
    originalTextArr: originalWordsArr,
  });

  const { rawWPM, accuracy, WPM } = typingTrackerServiceInstance.getResults();

  renderResults({ rawWPM, accuracy, WPM });
}
