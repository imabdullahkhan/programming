var arrayStringsAreEqual = function(word1, word2) {
  let str1 = word1.reduce((ac,c)=>  ac + c ,"");
  let str2 = word2.reduce((ac,c)=> ac + c ,"");
  
  if(str1 === str2){
      return true
  }else{
      return false
  }
};
console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]));
console.log(arrayStringsAreEqual(["a", "cb"],["ab", "c"]));