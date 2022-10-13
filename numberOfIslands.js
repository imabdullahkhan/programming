console.log("###################")
let hashVisited = {};
var dfs = function (grid, i, j) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === "0" || hashVisited[i + "," + j]) {
    return;
  }

  hashVisited[i + "," + j] = true;
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);

}
var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1" && !hashVisited[i + "," + j]) {
        dfs(grid, i, j);
        count++;
      }
    }
  }
  return count;

};

console.log(numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
]));

console.log(numIslands(

  [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
  ]


))
