var numJewelsInStones = function(jewels, stones) {
  let mapJewels = new Map();
  let count = 0;
  for(let i = 0; i < jewels.length; i++) {
      if(mapJewels.has(jewels[i]) == false) {
          mapJewels.set(jewels[i], true);
      }
  }
  for(let i = 0; i < stones.length; i++) {
      if(mapJewels.has(stones[i])) {
          count++;
      }
  }
  return count;

};

// Example 1:
console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
// Example 2:
console.log(numJewelsInStones("z", "ZZ")); // 0