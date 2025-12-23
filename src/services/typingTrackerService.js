export function typingTrackerService({ inputText, originalTextArr }) {
  const timeInMin = originalTextArr.length / 3 / 60;
  const originalText = originalTextArr.join(" ");
  const inputTextSize = inputText.length;

  const rawWPM = inputText.length / 5 / timeInMin;

  let correctChars = 0;
  for (let i = 0; i < inputTextSize; i++) {
    if (inputText[i] === originalText[i]) correctChars++;
  }

  const accuracy = (correctChars / inputTextSize) * 100;
  const WPM = rawWPM * (accuracy / 100);

  return {
    rawWPM,
    accuracy,
    WPM,
  };
}
