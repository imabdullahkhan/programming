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

let rangeSumOfBst = (root, L, R) => {
    // console.log(root)
    let sum = 0;
    const traverse = (root) => {
        if (root.val >= L && root.val <= R) sum += root.val;
        if (root.left !== null) traverse(root.left);
        if (root.right !== null) traverse(root.right);
    }
    traverse(root);
    return sum;


}

console.log(
    rangeSumOfBst(
        binaryTree([10, 5, 15, 3, 7, 13, 18, 1, null, 6]), 7, 15
    )
);