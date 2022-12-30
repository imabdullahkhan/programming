class Graph {

  constructor() {

  }
  addNode(value, children) {
    this.graph.set(value, children);
  }
}

var allPathsSourceTarget = function (graph) {
  let graphDFS = new Map();
  for (let i = 0; i < graph.length; i++) {
    graphDFS.set(i, graph[i]);
  }
  let startPoint = 0;
  let endPoint = graph.length - 1;
  let outPutPath = [];
  let currentPath = [];
  let dfs = (node) => {

    if (node == endPoint) {
      return true;
    }
    let children = graphDFS.get(node);
    for (let i = 0; i < children.length; i++) {
      currentPath.push(node);
      let found = dfs(children[i]);
      if (found) {
        outPutPath.push([...currentPath, endPoint]);
      }
      currentPath.pop();
    }
    // currentPath.pop();

  }
  dfs(startPoint);
  return outPutPath
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]))