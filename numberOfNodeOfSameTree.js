var countSubTrees = function (n, edges, labels) {
  const graph = new Map();

  for (const edge of edges) {
    const a = edge[0], b = edge[1];

    if (graph.has(a))
      graph.get(a).push(b);
    else
      graph.set(a, [b]);

    if (graph.has(b)) {

    }

    else { graph.set(b, []); }

  };
  let output = new Array(n).fill(0);
  let dfs = (root) => {
    let hash = {};
    let children = graph.get(root);
    for (let i = 0; i < children.length; i++) {
      let valueHash = dfs(children[i]);
      Object.keys(valueHash).map((key) => {
        if (hash[key]) {
          hash[key] = hash[key] + 1;
        } else {
          hash[key] = valueHash[key];
        }

      })
    }
    let chara = labels[root];
    if (hash[chara]) {
      hash[chara] = hash[chara] + 1;
    } else {
      hash[chara] = 1;
    }
    output[root] = hash[chara];
    return hash;
  }
  dfs(0)

  return output;
}

console.log(countSubTrees(7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], "abaedcd"));