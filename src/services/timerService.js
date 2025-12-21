export function timer({ durationInSec, onTick, onEnd }) {
  console.log(durationInSec);
  let remainingTime = durationInSec + 2;
  let intervalId = null;

  function start() {
    if (intervalId) return;
    intervalId = setInterval(() => {
      remainingTime -= 1;
      onTick(remainingTime);

      if (remainingTime <= 0) {
        stop();
        onEnd();
      }
    }, 1000);
  }

  function stop() {
    clearInterval(intervalId);
    intervalId = null;
  }

  return { start, stop };
}
