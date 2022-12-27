function hackerlandRadioTransmitters(x, k) {
  // Write your code here
  var count = 0;
  var n = x.length;
  x = Array.from(new Set(x));
  x.sort(function (a, b) {
    return a - b;
  });
  var power = k;
  let lastInstalledRadio = -1;
  for (let j = 1; j < x.length; j++) {
    if (x[j] - x[0] <= k) {

    } else {
      lastInstalledRadio = j;
      break;

    }


  }
  if (lastInstalledRadio == -1) {
    return 1;
  }
  for (let i = lastInstalledRadio + 1; i < x.length; i++) {


    if (x[i] - x[lastInstalledRadio] <= k) {

    } else {
      lastInstalledRadio = i;
      count++;
    }
  }
  return count + 1;
}
console.log(hackerlandRadioTransmitters([10, 10, 10], 3));   // 2
// console.log(hackerlandRadioTransmitters([1, 2, 3, 4, 5], 1));   // 2