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

var maxAncestorDiff = function (root) {
    let diff = -Infinity;

    let iterate = (root, max, min) => {
        if (!root) {
            if (diff < max - min) {
                diff = max - min;
            }
            return;
        }

        if (root.val > max) {
            max = root.val
        }

        if (root.val < min) {
            min = root.val
        }

        iterate(root.left, max, min)
        iterate(root.right, max, min)
    }

    iterate(root, root.val, root.val);

    return diff;
};

console.log(maxAncestorDiff(binaryTree([1, null, 2, null, 0, 3])));