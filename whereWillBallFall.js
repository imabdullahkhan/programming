var findBall = function (grid) {
  let result = [];
  for (let i = 0; i < grid[0].length; i++) {
    let flage = true;
    let row = 0;
    let col = i;
    // console.log(i)
    while (flage) {
      if (row >= grid.length) {
        flage = 2;
        break;
      }
      if (col < 0 || col >= grid[0].length) {
        flage = 1;
        break;
      }
      if (grid[row][col + 1] !== undefined && grid[row][col] == 1 && grid[row][col + 1] == -1) {
        flage = 1;
        break;
      }
      if (grid[row][col] == 1 && grid[row][col + 1] == undefined) {
        flage = 1;
        break;
      }
      if (grid[row][col - 1] !== undefined && grid[row][col] == -1 && grid[row][col - 1] == 1) {
        flage = 1;
        break;
      }
      if (grid[row][col] == -1 && grid[row][col - 1] == undefined) {
        flage = 1;
        break;
      }

      if (grid[row][col] == 1 && grid[row][col + 1] == 1) {
        col++;
        row++;
        continue;
      }
      if (grid[row][col] == -1 && grid[row][col - 1] == -1) {
        col--;
        row++;
      }

    }
    if (flage == 1) {
      result.push(-1);
    } else {
      result.push(col);
    }

  }
  return result;
};

console.log(findBall([[1, 1, 1, -1, -1], [1, 1, 1, -1, -1], [-1, -1, -1, 1, 1], [1, 1, 1, 1, -1], [-1, -1, -1, -1, -1]]));
// console.log(findBall([[-1]]));
console.log(findBall([
  [1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1],
  [1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1]
]));