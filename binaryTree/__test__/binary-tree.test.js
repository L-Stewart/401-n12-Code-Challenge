'use strict';

const BTStuff = require('../binary-tree');

const BinarySearchTree = BTStuff.BinarySearchTree;
const BinaryTreeNode = BTStuff.BinaryTreeNode;

const x = BTStuff.x;

describe('Testing ma Binary Tree things... 420', () => {
  it('Can successfully instantiate an empty tree', () => {
    const emptyTree = new BinarySearchTree();

    expect(emptyTree).toBeTruthy;
  });
});

describe('Testing that it has a root, which is odd because he is in the movies...', () => {
  it('Can successfully instantiate a tree with a single root node', () => {
    const treeWithRoot = new BinarySearchTree();
    treeWithRoot.add(30, 'I am root');

    expect(treeWithRoot.root).toBeTruthy;
    expect(treeWithRoot.root.key).toEqual(30);
  });
});

describe('My tree be havin babies', () => {
  it('Can successfully add a left child and right child to a single root node', () => {
    const treeWithKids = new BinarySearchTree();
    treeWithKids.add(30);
    treeWithKids.add(15);
    treeWithKids.add(45);

    expect(treeWithKids.root.left).toBeTruthy;
    expect(treeWithKids.root.right).toBeTruthy;
    expect(treeWithKids.root.right.key).toEqual(45);
    expect(treeWithKids.root.left.key).toEqual(15);
  });
});

describe('preOrder Check', () => {
  it('Can successfully return a collection from a preOrder traversal', () => {
    expect(x.preOrder()).toEqual([10, 4, 1, 9, 18 , 11, 30, 22, 19]);
  })
});

describe('inOrder Check', () => {
  it('Can successfully return a collection from an inOrder traversal', () => {
    expect(x.inOrder()).toEqual([1, 4, 9, 10, 11, 18, 19, 22, 30]);
  });
});

describe('postOrder Check', () => {
  it('Can successfully return a collection from a postorder traversal', () => {
    expect(x.postOrder()).toEqual([1, 9, 4, 11, 19, 22, 30, 18, 10]);
  });
});
