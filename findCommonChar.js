var commonChars = function (words) {
  let currentHashMap = {};
  let preHashMap = {};
  for (let i = 0; i < words[0].length; i++) {
    if (currentHashMap.hasOwnProperty(words[0][i])) {
      currentHashMap[words[0][i]] = currentHashMap[words[0][i]] + 1;
    } else {
      currentHashMap[words[0][i]] = 1;
    }
  }
  for (let j = 0; j < words.length; j++) {
    for (let z = 0; z < words[j].length; z++) {
      if (currentHashMap.hasOwnProperty(words[j][z])) {
        if (preHashMap.hasOwnProperty(words[j][z])) {
          preHashMap[words[j][z]] = preHashMap[words[j][z]] + 1;
        } else {
          preHashMap[words[j][z]] = 1;
        }
        currentHashMap[words[j][z]] = currentHashMap[words[j][z]] - 1;
        if (currentHashMap[words[j][z]] == 0) {
          delete currentHashMap[words[j][z]];
        }
      }

    }
    currentHashMap = preHashMap;
    preHashMap = {};
  }
  let output = [];
  for (let key in currentHashMap) {
    for (let i = 0; i < currentHashMap[key]; i++) {
      output.push(key);
    }
  }
  return output;
}
console.log(commonChars(["bella", "label", "roller"])); // ["e","l","l"]