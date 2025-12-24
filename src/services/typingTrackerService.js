export function typingTrackerService() {
  let rawWPM = 0;
  let accuracy = 0;
  let WPM = 0;

  function calculateResults({ inputText, originalTextArr }) {
    const timeInMin = originalTextArr.length / 3 / 60;
    const originalText = originalTextArr.join(" ");
    const inputTextSize = inputText.length;

    rawWPM = Math.round(inputText.length / 5 / timeInMin);

    let correctChars = 0;
    for (let i = 0; i < inputTextSize; i++) {
      if (inputText[i] === originalText[i]) correctChars++;
    }

    accuracy = Math.round((correctChars / inputTextSize) * 100);
    WPM = Math.round(rawWPM * (accuracy / 100));
  }

  function getResults() {
    return {
      rawWPM,
      accuracy,
      WPM,
    };
  }

  return { calculateResults, getResults };
}
