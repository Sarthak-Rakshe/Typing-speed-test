const API_URL = "https://random-word-api.herokuapp.com/word";

export async function wordService(timeInSec) {
  const response = await fetch(`${API_URL}?number=${timeInSec}`);
  if (!response.ok) {
    throw new Error("fetch words api error");
  }
  return response.json();
}
