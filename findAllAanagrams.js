


var findAnagrams = function (s, p) {
    let hashMapOfP = {};
    let hashMapOfS = {};
    if (p.length > s.length) return [];
    for (let i = 0; i < p.length; i++) {
        hashMapOfP[p[i]] = hashMapOfP[p[i]] ? hashMapOfP[p[i]] + 1 : 1;
    }
    let result = [];
    var isAnagram = () => {
        for (let i = 0; i < p.length; i++) {
            if (hashMapOfP[p[i]] !== hashMapOfS[p[i]]) {
                return false;
            }
        }
        return true;
    };
    for (let i = 0; i < s.length; i++) {
        hashMapOfS[s[i]] = hashMapOfS[s[i]] ? hashMapOfS[s[i]] + 1 : 1;
        if (i >= p.length) {
            hashMapOfS[s[i - p.length]]--;
        }
        if (isAnagram()) {
            result.push(i - p.length + 1);
        }
    }
    return result;
};

console.log(findAnagrams("abab", "ab")); // [0, 6]
