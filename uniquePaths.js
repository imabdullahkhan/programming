var uniquePaths = function (m, n) {
  let dp = Array.from(Array(m), () => new Array(n));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0) {
        dp[i][j] = 1;
        continue;
      }
      let sum1 = 0;
      let sum2 = 0;
      if ((i - 1) < 0) {
        sum1 = 1;
      } else {
        sum1 = dp[i - 1][j];
      }

      if ((j - 1) < 0) {
        sum2 = 0;
      } else {
        sum2 = dp[i][j - 1];
      }

      dp[i][j] = sum1 + sum2;
    }
  }
  return dp[m - 1][n - 1]

};
console.log(uniquePaths(3, 7))