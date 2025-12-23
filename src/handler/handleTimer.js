import { timerService } from "../services/timerService";
import { renderTime } from "../ui/renderTime";
import { handleEndTest } from "./handleEndTest";

export function handleTimer() {
  const time = document.getElementById("time-input");
  const timerInsatance = timerService({
    timeInSec: time.textContent,
    onTick: renderTime,
    onEnd: handleEndTest,
  });

  timerInsatance.start();
}
