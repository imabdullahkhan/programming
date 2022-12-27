var countAndSay = function (n) {

  var outputString = "1";
  for (let i = 1; i < n; i++) {
    var newString = "";
    var count = 0;
    var compareString = outputString[0];
    for (let j = 0; j < outputString.length; j++) {
      if (compareString == outputString[j]) {
        count = count + 1;
      } else {
        newString = `${newString}${count}${compareString}`
        count = 1;
        compareString = outputString[j];

      }
    }

    newString = `${newString}${count}${compareString}`


    outputString = newString;
  }
  return outputString


};
console.log(countAndSay(4))