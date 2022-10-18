var decodeString = function(s) {
    let numStack = [];
    let strStack = [];
    let currentStr = "";
    let outputSting = "";
    for(let i = 0; i < s.length; i++) {
      if(isNaN(s[i])) {
        if(s[i] === "[") {
          if(currentStr !== "") {
            strStack.push(currentStr);
            currentStr = "";
          }
        } else if(s[i] === "]") {
          if(currentStr !== "") {
            strStack.push(currentStr);
            currentStr = "";

          }
          let num = numStack.pop();
          let str = strStack.pop();
          outputSting = outputSting + str.repeat(num);
        } else {
          currentStr += s[i];
        }
      }else{
        numStack.push(s[i]);
      }
    }
    if(currentStr !== "") {
      outputSting = outputSting + currentStr;
    }else{
      return outputSting;
    }
};
// console.log(decodeString("3[a]2[bc]")); // "aaabcbc".
console.log(decodeString("3[a2[c]]")); // "accaccacc".
console.log(decodeString("2[abc]3[cd]ef")); // "abcabccdcdcdef".