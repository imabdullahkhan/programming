var minDeletionSize = function (strs) {
  let columnLength = strs[0].length;
  let rowLength = strs.length;
  let deletedColumns = 0;

  for (let i = 0; i < columnLength; i++) {
      let compareChar = strs[0][i];
      for (let j = 0; j < rowLength; j++) {
          if (compareChar <= strs[i][j]) {
              compareChar = strs[i][j];
          } else {
              deletedColumns = deletedColumns + 1
              break;
          }
      }
  }
  return deletedColumns;

};
console.log(minDeletionSize(["cba", "daf", "ghi"]));