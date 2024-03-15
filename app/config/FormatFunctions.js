export const properName = (name) => {
    const firstLetter = name.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = name.slice(1)
    return firstLetterCap + remainingLetters
}

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};
