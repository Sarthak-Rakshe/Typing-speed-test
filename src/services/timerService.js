export function timerService({ timeInSec, onTick, onEnd }) {
  let remainingTime = timeInSec;
  let intervalId = null;

  function start() {
    if (intervalId !== null) return;

    onTick(remainingTime);

    intervalId = setInterval(() => {
      if (remainingTime <= 0) {
        stop();
        onEnd();
        return;
      }

      remainingTime -= 1;

      //   console.log(remainingTime);
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
