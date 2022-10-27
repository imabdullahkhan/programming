function weightedUniformStrings(s, queries) {
  // Write your code here
  var alphetics = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  }
  var result = [];
  let counthash = {};
  let count = 0;
  let prev = s[0];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === prev) {
      count++;
    } else {
      count = 1;
    }
    prev = s[i];
    let weight = alphetics[s[i]] * count;
    counthash[weight] = true;
  }
  for (let i = 0; i < queries.length; i++) {
    if (counthash[queries[i]]) {
      result.push("Yes");
    } else {
      result.push("No");
    }
  }
  return result;

}
console.log(weightedUniformStrings("abccddde", [1, 3, 12, 5, 9, 10])); // ["Yes", "Yes", "Yes", "Yes", "No", "No"]
