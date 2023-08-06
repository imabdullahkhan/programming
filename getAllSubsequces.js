function getSubsequences(arr) {

  // arr = arr.sort((a, b) => a - b);
  let realOutput = [];
  let substring = (arr) => {
    let subs = [[]];
    let ouput = [];
    let hashMap = {}
    for (let i = 0; i < arr.length; i++) {
      let n = subs.length;
      for (let j = 0; j < n; j++) {
        let sub = subs[j].slice();
        sub.push(arr[i]);
        subs.push(sub);
        if (sub.length >= 2) {
          let keys = sub.toString();
          if (hashMap.hasOwnProperty(keys)) {

          } else {
            ouput.push(sub);
            hashMap[keys] = true;
          }
        }
      }
    }
    return ouput;
  }
  let temp = [arr[0]];
  let comp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= comp) {
      temp.push(arr[i]);
    } else {
      let small = substring(temp);
      if (small.length > 0) {
        realOutput.push(...small);
      }
      temp = [];
    }
    comp = arr[i];

  }
  if (temp.length > 0) {
    let small = substring(temp);
    if (small.length > 0) {
      realOutput.push(...small);
    }
  }
  return realOutput;

}
console.log(getSubsequences([4, 6, 7, 7]));