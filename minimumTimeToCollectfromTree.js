
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjustList = new Map();
  }
  addVertex(v) {
    this.AdjustList.set(v, []);
  }
  addEdge(v, w) {
    this.AdjustList.get(v).push(w);
    // this.AdjustList.get(w).push(v);
  }
  addVertexAndEdge(v, w) {
    if (!this.AdjustList.get(v)) {
      this.addVertex(v);
    }
    if (!this.AdjustList.get(w)) {
      this.addVertex(w);
    }
    this.addEdge(v, w);

  }
}


var minTime = function (n, edges, hasApple) {

  const graph = new Map();

  for (const edge of edges) {
    const a = edge[0], b = edge[1];

    if (graph.has(a))
      graph.get(a).push(b);
    else
      graph.set(a, [b]);

    if (graph.has(b))
      graph.get(b).push(a);
    else
      graph.set(b, [a]);
  }

  return dfs(graph, hasApple, 0, -1);
};

const dfs = function (graph, hasApple, curr, parent) {
  if (!graph.has(curr))
    return 0;

  let time = 0;

  for (const child of graph.get(curr)) {
    if (child === parent)
      continue;

    const childTime = dfs(graph, hasApple, child, curr);

    if (childTime > 0 || hasApple[child])
      time += 2 + childTime;
  }

  return time;
};
console.log(minTime(7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], [false, false, true, false, true, true, false]))