import { typingTrackerService } from "../services/typingTrackerService";
import { getUserInputs } from "../ui/getUserInputs";
import { renderTest } from "../ui/renderTest";
import { handleTimer } from "./handleTimer";
import { initTyping } from "./handleTyping";
import { handleWords } from "./handleWords";

export async function handleStart() {
  const userInputs = getUserInputs();
  renderTest(userInputs);

  const typingTrackerServiceInstance = typingTrackerService();

  const originalWordsArr = await handleWords();

  const typingInstance = initTyping({
    originalWordsArr,
    typingTrackerServiceInstance,
  });

  handleTimer({
    typingTrackerServiceInstance,
    typingInstance,
    originalWordsArr,
  });
}
