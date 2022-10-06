var maxProfit = function(prices) {
    // using Greedy Algorithm
    let maxProfit = 0;
    let minPrice = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i];
        }else if(prices[i] - minPrice > maxProfit){
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};
console.log(maxProfit([7,1,5,3,6,4])); // 5 ==> 1-6
console.log(maxProfit([7,6,4,3,1])); // 0 