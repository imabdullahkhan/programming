function alternate(s) {
  // Write your code here
if (s.length === 1) return 0;
let charSet = [...new Set(s)];
let max = 0;
let occSet = [];
const isAlternate = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }
  }
  return true;
};

if (charSet.length === s.length && isAlternate(s)) return s.length;

for (let i in charSet) {
  for (let j in charSet) {
    if (i === j) continue;
    // saving the combinations that already happened
    let set = charSet[i] + charSet[j];
    let reverse = charSet[j] + charSet[i];
    // If the combination was already analysed, it will pass to the next iteration
    if (occSet.indexOf(set) > 0) continue;

    // Saving the new combination
    occSet.push(set);
    occSet.push(reverse);

    // filter
    let filtered = s
      .split('')
      .filter((v) => v === charSet[i] || v === charSet[j])
      .join('');

    //check if it is max and alternated
    if (filtered.length > max && isAlternate(filtered)) {
      max = filtered.length;
    }
  }
}

return max;
}