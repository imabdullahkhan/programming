// possible ways to make change for a given amount
var change = function (amount, coins) {
    var ways = new Array(amount + 1).fill(0);
    ways[0] = 1;
    for (var i = 0; i < coins.length; i++) {
        for (var j = coins[i]; j <= amount; j++) {
            ways[j] += ways[j - coins[i]];
        }
    }
    return ways[amount];  
};
console.log(change(5, [1, 2, 5]));