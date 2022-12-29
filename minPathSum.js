var minPathSum = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i == 0 && j == 0) {
        continue;
      }
      let up = i - 1 >= 0 ? grid[i - 1][j] : Number.POSITIVE_INFINITY;
      let left = j - 1 >= 0 ? grid[i][j - 1] : Number.POSITIVE_INFINITY;
      grid[i][j] = grid[i][j] + Math.min(up, left);
    }
  }
  return grid[grid.length - 1][grid[0].length - 1]
};
console.log(minPathSum([[1, 2, 3], [4, 5, 6]]));