'use strict';

class Node{
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  insertAtHead(value){
    const newNode = new Node(value);
    // 1 - Connecting newNode to our list
    newNode.next = this.head;

    // 2 - re-assigning our HEAD
    this.head = newNode;
  }

  insertAtTail(value){
    const newNode = new Node(value);

    if(!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;

    while(current.next) { // Vinicio - WHILE I CAN MOVE CURRENT TO THE RIGHT
      current = current.next;
    }
    current.next = newNode;
  }
}

let A = new LinkedList();
let B = new LinkedList();
A.insertAtTail(1);
A.insertAtTail(2);
A.insertAtTail(3);
B.insertAtTail('A');
B.insertAtTail('B');
B.insertAtTail('C');

const mergedList = function(a,b) {

  if(a.head === null){
    return 'First list is empty.'
  }else if(b.head === null){
    return 'Second list is empty.'
  }else {

    let currentA = a.head;
    let refA = currentA.next;
    let refB = b.head;

    currentA.next = refB;
    refB = refB.next;
    currentA = currentA.next;

    while (refA !== null && refB !== null) {

      currentA.next = refA;
      currentA = currentA.next;
      refA = refA.next;

      currentA.next = refB;
      currentA = currentA.next;
      refB = refB.next;
    }

    if(refA !== null){
      currentA.next = refA;
      return a.head;
    }else if(refB !== null){
      currentA.next = refB;
      return a.head;
    }else{
      console.log('this is it');
      return a.head;
    }

  }
};

mergedList(A,B);
console.log(mergedList(A,B));