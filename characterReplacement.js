


var characterReplacement = function (s, k) {
  var subStringCount = function (s, k) {
    let max = 0;
    for (let i = 0; i < s.length; i++) {
      let count = 0;
      let char = s[i];
      let canDeleteValue = k;
      for (let j = i; j < s.length; j++) {
        if (s[j] === char) {
          count++;
        } else {
          if (canDeleteValue > 0) {
            count++;
            canDeleteValue--;
          } else {
            break;
          }
        }
      }
      max = Math.max(max, count);

    };
    return max;
  }
  let rightToLeft = subStringCount(s, k);
  let leftToRight = subStringCount(s.split('').reverse().join(''), k);
  return Math.max(rightToLeft, leftToRight);
}
console.log(characterReplacement("ABAB", 2));