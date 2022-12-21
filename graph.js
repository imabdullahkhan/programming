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
    this.AdjustList.get(w).push(v);
  }
  addVertexAndEdge(v, w) {
    if (!this.AdjustList.get(v)) {
      this.addVertex(v);
    }
    this.AdjustList.get(v).push(w);
    if (!this.AdjustList.get(w)) {
      this.addVertex(w);
    }
    this.AdjustList.get(w).push(v);
  }
  printGraph() {
    // get all the vertices
    var get_keys = this.AdjustList.keys();

    // iterate over the vertices
    for (var i of get_keys) {
      // get the corresponding adjacency list
      // for the vertex
      var get_values = this.AdjustList.get(i);
      var conc = "";

      // iterate over the adjacency list
      // concatenate the values into a string
      for (var j of get_values)
        conc += j + " ";

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc);
    }
  }
}
n = 3, edges = [[0, 1], [1, 2], [2, 0]];
var g = new Graph(3);
for (let i = 0; i < edges.length; i++) {
  g.addVertexAndEdge(edges[i][0], edges[i][1]);
}
console.log(g.printGraph())