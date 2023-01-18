var minFlipsMonoIncr = function (s) {
  let totalZero = 0;
  let totalOnes = 0;
  let totalOnesAfterOne = 0;
  let totalZerosAfterOne = 0;
  let firstOne = false;
  for (let i = 0; i < s.length; i++) {
      if (s[i] == '0') {
          totalZero = totalZero + 1
      }
      if (s[i] == '1') {
          firstOne = true;
          totalOnes = totalOnes + 1
      }
      if (firstOne && s[i] == '1') {
          totalOnesAfterOne = totalOnesAfterOne + 1;
      }
      if (firstOne && s[i] == '0') {
          totalZerosAfterOne = totalZerosAfterOne + 1;
      }

    


  }
  return Math.min(totalZero,totalOnes,totalOnesAfterOne,totalZerosAfterOne)
};
console.log(minFlipsMonoIncr("00110"))