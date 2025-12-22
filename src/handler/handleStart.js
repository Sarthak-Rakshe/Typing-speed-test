import { getUserInputs } from "../ui/getUserInputs";
import { renderTest } from "../ui/renderTest";

export function handleStart() {
  const userInputs = getUserInputs();
  renderTest(userInputs);
  const timerInstance = timer();
}
