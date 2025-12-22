import { wordService } from "../services/wordService";
import { renderWords } from "../ui/renderWords";

export async function handleWords() {
  const words = await wordService(40);
  renderWords(words);
}
