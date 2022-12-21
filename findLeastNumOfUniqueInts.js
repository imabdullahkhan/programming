var findLeastNumOfUniqueInts = function (arr, k) {
  let m = new Map();
  arr.forEach(num => m.set(num, m.get(num) + 1 || 1));
  let occurrences = Array.from(m.values());
  occurrences.sort((a, b) => a - b);
  let res = occurrences.length;
  for (let num of occurrences) {
    if (k >= num) {
      k -= num;
      res--;
    }
    else return res;
  }
  return res;

};
console.log(findLeastNumOfUniqueInts([5, 5, 4], 1))