const cheapFlightsWithKSteps = (n, flights, src, dest, k) => {
  let graph = {};
  for (let i = 0; i < flights.length; i++) {
    if (graph.hasOwnProperty(flights[i][0])) {
      graph[flights[i][0]].child.push({ node: flights[i][1], cost: flights[i][2] })
    } else {
      graph[flights[i][0]] = {
        child: [{ node: flights[i][1], cost: flights[i][2] }]
      }
    }
  }
  let minCost = Array(n).fill(Number.POSITIVE_INFINITY);
  let Bfs = () => {

  }

  console.log(graph);
}
console.log(cheapFlightsWithKSteps(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1))