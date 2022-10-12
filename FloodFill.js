let hashVisitor ={};
var floodFill = function(image, sr, sc, color) {
  
  
  startingPixelColor = image[sr][sc];
  if(startingPixelColor === color){
    return image;

  }
  image[sr][sc] = color;
  hashVisitor[sr+"-"+sc] = true;

  if (sr - 1 >= 0 && image[sr - 1][sc] === startingPixelColor && !hashVisitor[(sr - 1)+"-"+sc]) {
    floodFill(image, sr - 1, sc, color);
  }
  if (sr + 1 < image.length && image[sr + 1][sc] === startingPixelColor && !hashVisitor[(sr + 1)+"-"+sc]) {
    floodFill(image, sr + 1, sc, color);
  }
  if (sc - 1 >= 0 && image[sr][sc - 1] === startingPixelColor && !hashVisitor[sr+"-"+(sc - 1)]) {
    floodFill(image, sr, sc - 1, color);
  }
  if (sc + 1 < image[0].length && image[sr][sc + 1] === startingPixelColor && !hashVisitor[sr+"-"+(sc + 1)]) {
    floodFill(image, sr, sc + 1, color);
  }
  return image;

};

// console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));
console.log(floodFill([[0,0,0],[0,0,0]], 1,0, 2));