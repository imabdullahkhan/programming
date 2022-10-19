var spiralOrder = function (matrix) {
  let hashMapVisited = {};
  let result = [];
  let pointerMoving = 'right';
  let flag = true;
  let i = 0;
  let j = 0;
  result.push(matrix[i][j]);
  while (flag) {
    let checkingAllFourDirections = 0;
    if (pointerMoving == 'right') {
      if (matrix[i][j + 1] !== undefined && !hashMapVisited[i + ',' + (j + 1)]) {
        result.push(matrix[i][j + 1]);
        hashMapVisited[i + ',' + j] = true;
        j++;
        continue;
      } else {
        checkingAllFourDirections++;
        pointerMoving = 'down';
      }
    }

    if (pointerMoving == 'down') {
      if (matrix[i + 1] !== undefined && matrix[i + 1][j] !== undefined && !hashMapVisited[i + 1 + ',' + j]) {
        result.push(matrix[i + 1][j]);
        hashMapVisited[i + ',' + j] = true;
        i++;
        continue;
      } else {
        checkingAllFourDirections++;
        pointerMoving = 'left';
      }
    }
    if (pointerMoving == 'left') {
      if (matrix[i][j - 1] !== undefined && !hashMapVisited[i + ',' + (j - 1)]) {
        result.push(matrix[i][j - 1]);
        hashMapVisited[i + ',' + j] = true;
        j--;
        continue;
      } else {
        checkingAllFourDirections++;
        pointerMoving = 'up';
      }
    }
    if (pointerMoving == 'up') {
      if (matrix[i - 1] !== undefined && matrix[i - 1][j] !== undefined && !hashMapVisited[i - 1 + ',' + j]) {
        result.push(matrix[i - 1][j]);
        hashMapVisited[i + ',' + j] = true;
        i--;
        continue;
      } else {
        checkingAllFourDirections++;
        pointerMoving = 'right';
      }
    }
    if (checkingAllFourDirections == 4) {
      flag = false;
    }
  }

return result;


};
// console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); // [1,2,3,4,8,12,11,10,9,5,6,7]