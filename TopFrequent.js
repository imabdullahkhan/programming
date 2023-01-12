var topKFrequent = function (nums, k) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
      if (hashMap.hasOwnProperty(nums[i])) {
          hashMap[nums[i]] = hashMap[nums[i]] + 1;
      } else {
          hashMap[nums[i]] = 1;
      }
  }
  let count = [];

  Object.keys(hashMap).map((key) => {
      count.push({ count: hashMap[key], key: key });
  });
  return count.sort((a, b) => b.count - a.count).slice(0,k).map((item) => item.key);

};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]