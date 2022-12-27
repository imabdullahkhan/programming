var maxProfit = function (prices) {

  var buy = -prices[0];
  var sell = 0;
  var cooldown = 0;

  for (var i = 1; i < prices.length; i++) {
    var newBuy = Math.max(buy, cooldown - prices[i]);
    var newSell = Math.max(sell, buy + prices[i]);
    var newCooldown = Math.max(cooldown, sell);

    buy = newBuy;
    sell = newSell;
    cooldown = newCooldown;
  }

  return sell;


};

