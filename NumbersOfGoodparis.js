var numIdenticalPairs = function (nums) {
  const map = nums.reduce((m, n, ) => m.set(n, (m.get(n)||0) + 1), new Map());
  return [...map.values()].reduce((num, n) => num + n * (n - 1) / 2, 0);

};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1 , 1]));
console.log(numIdenticalPairs([1, 2, 3]));

//2  = 1
//3  = 2
//4  = 6
//5 = 10 formula ==> n(n-1)/2
