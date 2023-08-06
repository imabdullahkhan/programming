var findJudge = function (n, trust) {
  let hashMap = {};
  for (let i = 0; i < trust.length; i++) {
    if (hashMap.hasOwnProperty(trust[i][1])) {
      hashMap[trust[i][1]] = {
        "isTrusted": hashMap[trust[i][1]].isTrusted,
        "count": hashMap[trust[i][1]].count + 1
      };
    } else {
      hashMap[trust[i][1]] = {
        "count": 1,
        "isTrusted": false
      };
    }



    if (hashMap.hasOwnProperty(trust[i][0])) {
      hashMap[trust[i][0]] = {
        "count": hashMap[trust[i][0]].count,
        "isTrusted": true
      };
      // hashMap[trust[i][1]] = hashMap[trust[i][1]] + 1;
    } else {
      hashMap[trust[i][0]] = {
        "count": 0,
        "isTrusted": true
      };
    }



  }
  let totalPeople = n;
  let findJudege = -1;
  Object.keys(hashMap).map((key) => {
    if (hashMap[key].count == totalPeople - 1 && !hashMap[key].isTrusted) {
      findJudege = key
    }

  });
  return findJudege
};
console.log(findJudge(2, [[1, 2]]));