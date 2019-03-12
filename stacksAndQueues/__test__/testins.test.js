'use strict';

const structuredClasses = require('./../stacks-and-queues');

const Node = structuredClasses.Node;
const Stack = structuredClasses.Stack;
const Queue = structuredClasses.Queue;

describe('Lab 8 tests', () =>{

  test('TEST-2 Testing the ability to push() into a STACK', () => {
    let stack = new Stack();
    stack.push(5);
    expect(stack.top.value).toEqual(5);
  })

  test('TEST-2 Testing that multiple nodes can be added to the stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
    stack.push(2);
    expect(stack.top.value).toEqual(2);
  })

  test('TEST-3Testing to see that we can pop() the STACK', () => {
    let stack = new Stack();
    stack.push(4);
    stack.push(3);
    stack.pop();
    expect(stack.top.value).toEqual(4);
  });

  test('TEST-4 Testing to see the empty STACK after multiple pop()', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.top).toEqual(null);
    stack.pop();
    expect(stack.pop()).toEqual('There is no top node to remove currently')
  })
});