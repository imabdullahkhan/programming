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
let leftSimilarTree = (root1, root2) => {
    let tree1Leafs = [];
    let tree2Leafs = [];
    const travers = (root, tree1) => {
        if (!root.left && !root.right) {

            if (tree1) {
                tree1Leafs.push(root.value);
            } else {
                tree2Leafs.push(root.value);
            }
        }
        if (root.left) {
            travers(root.left, tree1);
        }
        if (root.right) {
            travers(root.right, tree1);
        }

    }
    travers(root1, true);
    travers(root2, false);
    if (tree1Leafs.length !== tree2Leafs.length) {
        return false;
    }
    let flag = true;
    for (let i = 0; i < tree1Leafs.length; i++) {
        if (tree1Leafs[i] !== tree2Leafs[i]) {
            flag = false;
            break;
        }
    }
    if (flag) {

        return true
    } else {
        return false
    }


}
console.log(leftSimilarTree(binaryTree([1, 2, 3]), binaryTree([1, 3, 2])));