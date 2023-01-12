var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < costs.length; i++) {
      if (costs[i] <= coins) {
          count = count + 1;
          coins = coins - costs[i]
      } else {
          break;
      }
  }
  return count
};
console.log(maxIceCream([1, 3, 2, 4, 1], 7)); // 4