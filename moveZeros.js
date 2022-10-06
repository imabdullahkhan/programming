var moveZeroes = function(nums) {
  let zeroArray = [];
  nums  = nums.filter((v) => { v ==0 ?zeroArray.push(0):null; return v !=0  });
  
  return nums.concat(zeroArray);
};
console.log(moveZeroes([0,1,0,3,12]));