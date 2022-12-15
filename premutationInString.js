var checkInclusion = function (s1, s2) {
    let hashCountForS1 = {};
    for (let i = 0; i < s1.length; i++) {
        if (hashCountForS1[s1[i]]) {
            hashCountForS1[s1[i]]++;
        } else {
            hashCountForS1[s1[i]] = 1;
        }
    }
    let firstSubString = s2.substring(0, s1.length);
    console.log("🚀 ~ file: premutationInString.js:11 ~ checkInclusion ~ firstSubString", firstSubString)
    let hashCountForS2 = {};
    for (let i = 0; i < firstSubString.length; i++) {
        if (hashCountForS2[firstSubString[i]]) {
            hashCountForS2[firstSubString[i]]++;
        } else {
            hashCountForS2[firstSubString[i]] = 1;
        }
    }

    for (let i = 1; i < s2.length; i++) {

        hashCountForS2[s2[i - 1]] = hashCountForS2[s2[i - 1]] - 1;
        // let hashCountForS2 = {};
        let subString = s2.substring(i, i + s1.length);
        console.log("🚀 ~ file: premutationInString.js:15 ~ checkInclusion ~ subString", subString)
        let flag = true;
        for (let key in hashCountForS1) {
            if (hashCountForS1[key] !== hashCountForS2[key]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return true;
        }

    }
    return false;

};

console.log(checkInclusion("ab", "eidbaooo"));
