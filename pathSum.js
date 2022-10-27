
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
var hasPathSum = function (root, targetSum ) {

  if (root === null) {
    return false;
  }
  if (root.left === null && root.right === null) {
    return targetSum === root.value;
  }
  return hasPathSum(root.left, targetSum - root.value) || hasPathSum(root.right, targetSum - root.value);




};

console.log(hasPathSum(binaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22)); // true

