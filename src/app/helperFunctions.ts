export default function determineMatch(
  word: string,
  input: string[],
  char: string
) {
  let matchType = "none";
  for (let i = 0; i < word.length; i++) {
    console.log(word[i], input[i], char);
    if (word[i] === char) {
      if (input[i] === char) matchType = "full";
      else matchType = "char";
    }
  }
  return matchType;

  // const j = i - Math.floor(i / 5) * 5;
  // if (word[j] === char) return "full";
  // if (word.includes(char)) return "char";
  // return "none";
}
