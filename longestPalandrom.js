
var longestPalindrome = function (s) {
  let output = 0;
  let hashmap = {};
  let isHashOdd = false;
  for (let i = 0; i < s.length; i++) {
    if (!hashmap[s[i]]) hashmap[s[i]] = 0;
    hashmap[s[i]] += 1;
  }
  Object.values(hashmap)?.forEach((char) => {
    output += char % 2 ? char - 1 : char;
    if (char % 2 && !isHashOdd) isHashOdd = true;
  })
  return isHashOdd ? output + 1 : output;

};
// console.log(longestPalindrome("abccccdd")); // "bab" or "aba"
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth")); // 
