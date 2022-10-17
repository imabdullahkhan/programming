var backspaceCompare = function (s, t) {
  let sString = ""
  let tString = ""
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      sString = sString + s[i]
    } else {
      
      sString = sString.slice(0, -1)
    }
  }
  for (let h = 0; h < t.length; h++) {
    if (t[h] !== "#") {
      tString = tString +t[h]
    } else {
      
      tString = tString.slice(0, -1)
    }
  }
  if (sString === tString) {
    return true
  } else {
    return false
  }

};
console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));