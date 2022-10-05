var countPoints = function (rings) {
  let rodHash = {};
  let colorCount = 0;
  let alreadyCounted = {};
  for (let index = 0; index < rings.length; index = index + 2) {
    let color = rings[index];
    let rod = rings[index + 1];
    if (rodHash[rod] == undefined) {
      rodHash[rod] = {
        B: color == 'B' ? 1 : 0,
        G: color == 'G' ? 1 : 0,
        R: color == 'R' ? 1 : 0,
      }
    } else {
      if (color == 'B') {
        rodHash[rod].B = 1;
      } else if (color == 'G') {
        rodHash[rod].G = 1;
      } else if (color == 'R') {
        rodHash[rod].R = 1;
      }
      if (alreadyCounted[rod] == undefined  && rodHash[rod].B > 0 && rodHash[rod].G > 0 && rodHash[rod].R > 0) {
        colorCount++;
        alreadyCounted[rod] = true;
      }
    }

  }
  return colorCount;
};

console.log(countPoints("B0R0G0R9R0B0G0"));
console.log(countPoints("G4"));
console.log(countPoints("B0B6G0R6R0R6G9"))