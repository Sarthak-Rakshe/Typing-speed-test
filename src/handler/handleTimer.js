import { timerService } from "../services/timerService";
import { renderTime } from "../ui/renderTime";
import { handleEndTest } from "./handleEndTest";

export function handleTimer({
  typingTrackerServiceInstance,
  typingInstance,
  originalWordsArr,
}) {
  const time = document.getElementById("time-input");

  const timerInstance = timerService({
    timeInSec: Number(time.textContent),
    onTick: renderTime,
    onEnd: () =>
      handleEndTest({
        typingTrackerServiceInstance,
        typingInstance,
        originalWordsArr,
      }),
  });

  timerInstance.start();
}
