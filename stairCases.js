function stepPerms(n) {
  // Write your code here
  let arr = [1, 2, 4];
  if (arr[n]) {
    return n;
  }
  for (let i = 3; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  return arr[n-1];
}
console.log(stepPerms(5));