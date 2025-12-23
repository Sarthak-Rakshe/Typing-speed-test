import { wordService } from "../services/wordService";
import { renderWords } from "../ui/renderWords";

export async function handleWords() {
  const timeElement = document.getElementById("time-input");
  const words = await wordService(timeElement.textContent * 3);
  renderWords(words);
  return words;
}
