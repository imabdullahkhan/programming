var longestPalindromeByWords = function (words) {
  let hash = {};
  var isPalindrome = function (word) {
    let i = 0;
    let j = word.length - 1;
    while (i < j) {
      if (word[i] !== word[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    
    word = word.split('').sort((a, b) => a.localeCompare(b)).join('');
    if (hash[word] === undefined) {
      // isPalindrome(word) ? palindromeHash[word] = true : hash[word] = true;
      hash[word] = {
        count: 1,
        isPalindrome: isPalindrome(word)
      };
    } else {
      hash[word].count++;
    }
  }
  let maxPalindrome = 0;
  let maxPalindromeCount = 0;
  for (let key in hash) {
    if (hash[key].count % 2 === 0) {
      maxPalindromeCount += (hash[key].count * key.length);
    } else if (hash[key].isPalindrome) {
      maxPalindrome = Math.max( (hash[key].count * key.length), maxPalindrome);
    }
  }
  return maxPalindromeCount + maxPalindrome;

};

console.log(longestPalindromeByWords(["lc", "cl", "gg"]));