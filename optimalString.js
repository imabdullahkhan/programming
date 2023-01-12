partitionString = function (s) {
  let hashMap = {};
  let minSubStringCount = 1;
  for (let i = 0; i < s.length; i++) {
      if (hashMap.hasOwnProperty(s[i])) {
          minSubStringCount = minSubStringCount + 1;
          hashMap = {};
          hashMap[s[i]] = true;
      } else {
          hashMap[s[i]] = true;
      }
  }
  if (Object.keys(hashMap).length > 0) {
      minSubStringCount = minSubStringCount + 1;
  }
  return minSubStringCount
};
console.log(partitionString("abacaba")); // 5