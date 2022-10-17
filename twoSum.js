var twoSum = function(nums, target) {
  let hashSum = {};
  for(let i = 0 ; i < nums.length ; i++){
      
    if(hashSum.hasOwnProperty(nums[i])){
      return [hashSum[nums[i]], i]
    }else{
          let storeNumber  =  target - nums[i]    ;
          hashSum[storeNumber] = i;
      }
  }
};
console.log(twoSum([2,7,11,15], 9));