export function typingTrackerService({ keydownEvent, timeRemaining }) {
  const result = {
    testEnded: false,
    correctCharacterPressed: false,
  };
  if (timeRemaining <= 0) return (result.testEnded = true);
}
