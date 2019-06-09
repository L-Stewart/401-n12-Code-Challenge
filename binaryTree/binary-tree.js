//----------------------------------------------------------------------------------------------------------------
// Much help from
// https://itnext.io/data-structures-in-js-binary-trees-react-app-5443b951a46b
//----------------------------------------------------------------------------------------------------------------
'use strict';

class BinaryTreeNode {
  constructor(key, value){
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// class BinaryTree {
//   constructor() {
//     this.root = null;
//   }

//   add(key, value) {

//     const newNode = new BinaryTreeNode(key, value);

//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }

//   insertNode(node, newNode) {

//     if (!node.left){
//       node.left = newNode;
//     } else if (!node.right) {
//       node.right = newNode;
//     } else {
//       this.insertNode()
//     }
//   }
// }

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(key, value) {

    if (!Number.isInteger(key)) {
      return;
    }

    const newNode = new BinaryTreeNode(key, value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {

    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.key === node.key) {
      node.value = newNode.value;
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  contains(node, searchKey) {

    if (!node){
      return console.log(searchKey + ': does not exist.');
    } else if (searchKey < node.key) {
      return this.contains(node.left, searchKey);
    } else if (searchKey > node.key) {
      return this.contains(node.right, searchKey);
    } else {
      return console.log(searchKey + ': does exist');
    }
  }

  preOrder(node) {

    let nodes = [];

    function _walk(node) {

      nodes.push(node.key);

      if(node.left) {
        _walk(node.left);
      }
      if(node.right) {
        _walk(node.right);
      }
    }

    _walk(this.root);

    console.log(nodes);
    return nodes;
  }

  inOrder() {

    let nodes = [];

     function _walk(node) {

       if(node.left) {
         _walk(node.left);
       }
       nodes.push(node.key);
       if(node.right) {
         _walk(node.right);
       }
     }

     _walk(this.root);

     console.log(nodes);
     return nodes;
  }

  postOrder() {

    let nodes = [];

      function _walk(node) {

        if(node.left) {
          _walk(node.left);
        }
        if(node.right) {
          _walk(node.right);
        }
        nodes.push(node.key);
      }

      _walk(this.root);

      console.log(nodes);
      return nodes;
  }

  outOrder(node) {

    if (node) {

      this.outOrder(node.right);
      console.log(node.key);
      this.outOrder(node.left);
    }
  }
}

let x = new BinarySearchTree();

x.add(10);
x.add(4);
x.add(9);
x.add(18);
x.add(11);
x.add(30);
x.add(22);
x.add(19);
x.add(1);

// console.log(x);
// x.inOrder();
// x.preOrder();
x.postOrder();
// x.outOrder(x.root);
// x.contains(x.root, 18);
// x.contains(x.root, 3);

module.exports = {BinarySearchTree, BinaryTreeNode, x};