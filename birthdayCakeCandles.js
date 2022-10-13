function birthdayCakeCandles(candles) {
  // Write your code here
const biggestNumAndRepeateCount = [0, 0]; // number, repeate count
  
  candles.forEach((candle) => {
      if(candle > biggestNumAndRepeateCount[0]) {
          biggestNumAndRepeateCount[0] = candle;
          biggestNumAndRepeateCount[1] = 1;
      } else if (candle === biggestNumAndRepeateCount[0]){
          biggestNumAndRepeateCount[1]++;
      }
  });
  
  return biggestNumAndRepeateCount[1];
}