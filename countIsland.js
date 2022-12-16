var maxAreaOfIsland = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let count = 0;
    let islandFound = (i, j) => {

        if (i >= m || i <= -1) {
            return
        }
        if (j >= n || j <= -1) {
            return
        }
        if (grid[i][j] == 2 || grid[i][j] == 3) {
            return;
        }
        if (grid[i][j] == 1) {
            grid[i][j] = 3;
        }
        if (grid[i][j] == 0) {
            return;
        }

        islandFound(i - 1, j);
        islandFound(i + 1, j);
        islandFound(i, j + 1);
        islandFound(i, j - 1);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2 || grid[i][j] == 3) {
                continue;
            }
            if (grid[i][j] == 0) {
                grid[i][j] = 2;
            }
            if (grid[i][j] == 1) {

                islandFound(i, j);
                count = count + 1;
            }
        }
    }

    return count;

};

var grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
maxAreaOfIsland(grid);