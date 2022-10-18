var topKFrequent = function (words, k) {
  let hashMap = {};
  for (let i = 0; i < words.length; i++) {
    if (hashMap[words[i]]) {
      hashMap[words[i]]++;
    } else {
      hashMap[words[i]] = 1;
    }
  }
  let frequentWords = [];
  for (let key in hashMap) {
    if (hashMap[key] >= k) {
      frequentWords.push(key);
    }
  }
  frequentWords.sort((a, b) => {
    
      return a.localeCompare(b);
    
  });
  return frequentWords;
};
console.log(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4)); // ["i", "love"]