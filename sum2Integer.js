sum2IntegerUsingSingleDigit = (a, b) => {
  let result = 0;
  let carry = 0;
  let i = 0;
  while (a > 0 || b > 0) {
    let sum = (a % 10) + (b % 10) + carry;
    carry = Math.floor(sum / 10);
    result += (sum % 10) * Math.pow(10, i);
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
    i++;
  }
  return result;
};
console.log(sum2IntegerUsingSingleDigit(123, 456)); // 579