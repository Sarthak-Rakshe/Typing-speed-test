export function timerService({ timeInSec, onTick, onEnd, typingService }) {
  let remainingTime = timeInSec;
  let intervalId = null;

  function start() {
    if (intervalId !== null) return;

    onTick(remainingTime);

    intervalId = setInterval(() => {
      if (remainingTime <= 0) {
        stop();
        onEnd(typingService);
        return;
      }

      remainingTime -= 1;

      onTick(remainingTime);
    }, 1000);
  }

  function stop() {
    if (intervalId === null) return;
    clearInterval(intervalId);
    intervalId = null;
  }

  return { start, stop };
}
