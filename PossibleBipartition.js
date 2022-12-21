var possibleBipartition = function (n, dislikes) {
  let N = n;
  const graph = new Array(N + 1);
  const color = {};

  const dfs = (node, c) => {
    if (color[node]) {
      return color[node] === c
    }
    color[node] = c;

    for (let i = 0; i < graph[node].length; i++) {
      if (!dfs(graph[node][i], c ^ 1)) {
        return false;
      }
    }
    return true
  }

  for (let i = 1; i <= N; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < dislikes.length; i++) {
    const edge = dislikes[i];
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }

  for (let i = 1; i <= N; i++) {
    if (color[i] == null && !dfs(i, 0)) {
      return false
    }
  }
  return true;
};