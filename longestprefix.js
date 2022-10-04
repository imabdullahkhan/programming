var longestCommonPrefix = function(strs) {
  if (strs.length == 0) return "";
  
  let prefix = strs[0][0];
  let prefixChar = strs[0][0]; 
  let chartIndex = 0;
  var flage = true;
  if(strs.length == 1) return strs[0];
  while(flage){
      for(let i = 0; i < strs.length; i++){
          if(strs[i].length == 0){
              prefix = "";
              flage = false
              break;
          }
          if(strs[i][chartIndex] !=  prefixChar){
              flage = false;
              break;
          }
      }
      if (flage && chartIndex + 1 >= strs[0].length) {
        prefixChar = "a";
        prefix += prefixChar;
        flage = false;

      }
      if(flage){
          chartIndex++;
          prefixChar = strs[0][chartIndex];
          prefix += strs[0][chartIndex];
      }
  }
  

  return prefix.substring(0, prefix.length - 1);
};
console.log(longestCommonPrefix(["flower","flower","flower","flower"]));
console.log(longestCommonPrefix(["ab", "a"]));
console.log(longestCommonPrefix(["flower","flow","flight"]));
