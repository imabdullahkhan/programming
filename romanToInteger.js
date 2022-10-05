
let romanHash ={
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
}

var romanToInt = function(s) {
    let sum = 0;
    let i = 0;
    while(i < s.length){
        if(romanHash[s[i] + s[i+1]]){
            sum += romanHash[s[i] + s[i+1]];
            i += 2;
        }else{
            sum += romanHash[s[i]];
            i++;
        }
    }
};
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
