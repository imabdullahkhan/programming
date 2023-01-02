var detectCapitalUse = function (word) {
  let case1 = false
  let case2 = false
  let case3 = false
  for (let i = 0; i < word.length; i++) {
      if (word[i].toUpperCase() == word[i] && i == 0) {
          case1 = true;
          case2 = true;
          continue;
      } else if (i == 0) {
          case3 = true;
          continue;
      }

      if (word[i].toUpperCase() != word[i]) {
          case1 = false;
      }
      if (word[i].toUpperCase() == word[i]) {
          case2 = false;
          case3 = false;
      }
  }
  if (case1 || case2 || case3) {
      return true;
  }else{
      return false 
  }
};

console.log(detectCapitalUse("USA"));