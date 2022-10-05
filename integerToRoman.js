
let romanHash ={
  'I': 1,
  'IV': 4,
  'V': 5,
  'IX': 9,
  'X': 10,
  'XL': 40,
  'L': 50,
  'XC': 90,
  'C': 100,
  'CD': 400,
  'D': 500,
  'CM': 900,
  'M': 1000
}

var intToRoman = function(num) {
    let roman = "";
    let romanKeys = Object.keys(romanHash);
    let romanValues = Object.values(romanHash);
    let i = romanValues.length - 1;
    while(num > 0){
        if(num >= romanValues[i]){
            roman += romanKeys[i];
            num -= romanValues[i];
        }else{
            i--;
        }
    }
    return roman;
};
console.log(intToRoman(500));
console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));

