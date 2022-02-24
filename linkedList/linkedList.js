//LIST
//O(1) - вставка в начало/конец

class LinkedList {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  add(value) {
    if (this.size === 0) {
      this.root = new Node(value);
      this.size++;
      return true;
    }
    let node = this.root;
    while (node.next) {
      node = node.next;
    }
    let newNode = new Node(value);
    node.next = newNode;
    this.size++;
  }

  getSize() {
    return this.size;
  }

  print() {
    let result = [];
    let node = this.root;
    while (node) {
      result.push(node.value);
      node = node.next;
    }

    console.log(result);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
list.add(10);
list.add(19);
list.add(1);
list.add(16);
list.add(6);
list.print();
