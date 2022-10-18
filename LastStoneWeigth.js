var lastStoneWeight = function (stones) {

  while (stones.length > 1) {
    stones.sort((a, b) => a - b);


    let biggest1th = stones.pop();
    let biggest2th = stones.pop();

    stones.push(biggest1th - biggest2th)
  }

  return stones[0]
};
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1