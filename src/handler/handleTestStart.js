import { getUserInputs } from "../ui/getUserInputs.js";
import { timer } from "../services/timerService.js";
import { showTimer } from "../ui/showTimer.js";
import { testStart } from "../ui/testStart.js";
import { renderWords } from "../ui/renderWords.js";

export function handleTestStart() {
  testStart(() => {
    const { username, time } = getUserInputs();
    const timerInstance = timer({
      durationInSec: Number(time),
      onTick: showTimer,
      onEnd: onEnd,
    });

    renderWords(time);
    function onEnd() {
      console.log("Test has ended");
    }

    timerInstance.start();
  });
}
