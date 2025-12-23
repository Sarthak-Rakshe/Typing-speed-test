import { getUserInputs } from "../ui/getUserInputs";
import { renderTest } from "../ui/renderTest";
import { handleTimer } from "./handleTimer";
import { initTyping } from "./handleTyping";
import { handleWords } from "./handleWords";

export async function handleStart() {
  const userInputs = getUserInputs();
  renderTest(userInputs);
  handleTimer();
  const originalWordsArr = await handleWords();
  initTyping(originalWordsArr);
}
