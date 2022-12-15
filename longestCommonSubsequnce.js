var longestCommonSubsequence = function (text1, text2) {
    let dp = new Array(text1.length + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(text2.length + 1).fill(0);
    }
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[text1.length][text2.length];
    // console.log("🚀 ~ file: longestCommonSubsequnce.js:11 ~ longestCommonSubsequence ~ dp", dp)
};
console.log(longestCommonSubsequence("abcde", "ace"));