
var sortString = function(s) {
    let result = "";
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    let keys = Array.from(map.keys()).sort((a, b) =>  a.localeCompare(b));
    let keysReverse = Array.from(map.keys()).sort((a, b) =>  b.localeCompare(a));
    while (result.length < s.length) {
        for (let i = 0; i < keys.length; i++) {
            if (map.get(keys[i]) > 0) {
                result += keys[i];
                map.set(keys[i], map.get(keys[i]) - 1);
            }
        }
        for (let i = 0; i < keysReverse.length; i++) {
            if (map.get(keysReverse[i]) > 0) {
                result += keysReverse[i];
                map.set(keysReverse[i], map.get(keysReverse[i]) - 1);
            }
        }
    }
    return result;
};

console.log(sortString("aaaabbbbcccc"));
console.log(sortString("rat"));