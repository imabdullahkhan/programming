
let binaryTree = function (values) {
  let treeNode = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  let root = new treeNode(values[0]);
  let queue = [root];
  let i = 1;
  while (i < values.length) {
    let node = queue.shift();
    if (values[i] !== null) {
      node.left = new treeNode(values[i]);
      queue.push(node.left);
    }
    i++;
    if (values[i] !== null) {
      node.right = new treeNode(values[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

console.log(binaryTree([  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));