var z1 = require('./z1.js');
var tree = new z1.Tree(null, 1, null);
var tree = new z1.Tree(null, 1, null);
tree.left = new z1.Tree(null, 2, null);
tree.right = new z1.Tree(null, 3, null);
tree.right.left = new z1.Tree(null, 4, null);


z1.treePrint(tree);


function* gen(tree) {
    yield tree.value;
    if (tree.left != null)
        yield* gen(tree.left);
    if (tree.right != null)
        yield* gen(tree.right);
}

var it = gen(tree);

for (var i of it) {
    console.log(i);
}