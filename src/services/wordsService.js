const words = [
  "example",
  "words",
  "for",
  "typing",
  "test",
  "application",
  "camel",
  "elephant",
  "lion",
  "abbaadd",
];

export function getWords(count) {
  let wordsList = [];
  for (let i = 0; i < count; i++) {
    wordsList.push(words[Math.floor(Math.random() * words.length)]);
  }
  return wordsList;
}
