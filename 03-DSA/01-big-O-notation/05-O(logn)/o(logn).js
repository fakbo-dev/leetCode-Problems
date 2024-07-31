// usually for binary search for example in an array.


// Binary search on BST
function search(root, target) {


    if (!root) return false;
    if (target < root.value) {
        return search(root.left, target);
    } else if (target > root.value) {
        return search(root.right, target);
    } else {
        return true;
    }
}