'use strict';

class Node {
  constructor(value){
    this.next = null;
    this.value = value;
  }
}

class Stack {
  constructor(top){
    this.top = null;
  }

  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop(){
    if(this.top && this.top.next){
      let removed = this.top;
      this.top = removed.next;
      return removed.value;
    }else if(this.top.value){
      let removed = this.top;
      this.top = null;
      return removed.value;
    }else{
      return 'There is no top node to remove currently';
    }
  }

  peek(){
    if(this.top.value){
      return this.top.value;
    }else{
      return 'There is no top value currently as it is NULL';
    }
  }
}

class Queue {
  constructor(front){
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    let node = new Node(value);
    if(this.front === null){
      this.front = node;
      this.rear = node;
      return 'Adding the new Node to the front of the Queue.'
    }else{
      this.rear.next = node;
      this.rear = node;
      return 'Adding the new Node to the back of the Queue.'
    }
  }

  dequeue(){
    if(this.front && this.front.next){
      let movingOn = this.front;
      this.front = this.front.next;
      return movingOn.value;
    }else if(this.front.value){
      let movingOn = this.front;
      this.front = null;
      return movingOn.value;
    }else{
      return 'There is nothing in Queue at the moment.';
    }
  }

  peek(){
    if(this.front.value){
      return this.front.value;
    }else{
      return 'There is no Node in Queue at the moment.'
    }
  }
}

module.exports = {Node, Stack, Queue};
