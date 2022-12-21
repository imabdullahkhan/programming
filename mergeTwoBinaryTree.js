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
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var mergeTrees = function (root1, root2) {
    console.log(root1)
    console.log(root2)
    




};

console.log(mergeTrees(binaryTree([1, 3, 2, 5]), binaryTree([2, 1, 3, null, 4, null, 7])))