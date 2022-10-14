
let hashAlready = {};
function beautifulPairs(A, B) {
  let duplicatedValueInB = false;
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] === B[j] && !hashAlready[i + "," + j]) {
        hashAlready[i + "," + j] = true;
        count++;
        break;
      } else {
        duplicatedValueInB = true;
      }
    }

  }
  if (duplicatedValueInB) {
    count++;
  }
  return count;
}

// Sample Input
console.log(beautifulPairs([1, 2, 3, 4], [1, 2, 3, 3]));
