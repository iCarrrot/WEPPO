module.exports = {
    Tree: function (left, value, right) {
        this.left = left;
        this.value = value;
        this.right = right;
    },

    treePrint: function (tree) {
        if (tree!=null){
            console.log(` |${tree.value}| `);
            treePrint(tree.left);
            treePrint(tree.right);
        }
    }
}



function Tree(left, value, right) {
    this.left = left;
    this.value = value;
    this.right = right;
}
var tree = new Tree(null, 1, null);
tree.left = new Tree(null, 2, null);
tree.right = new Tree(null, 3, null);
tree.right.left = new Tree(null, 4, null);

function treePrint(tree) {
    if (tree!=null){
        console.log(` |${tree.value}| `);
        treePrint(tree.left);
        treePrint(tree.right);
    }
}
//treePrint(tree);

    
