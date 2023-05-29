import "./style.css";

console.log("heys");


class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.nextNode;
    }

    return count;
  }


 head() {
    return this.head
 }
  tail() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }

    return current;
  }


at(index) {
    let count = 0;
    let current = this.head;

    while (current !== null && count < index) {
      current = current.nextNode;
      count++;
    }

    if (current === null) {
      // Index is out of range
      return null;
    }

    return current;
  }


pop() {
     if (!this.head) {
      return null;
    }

    let current = this.head;
    let previous = null;

    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }

    if (previous) {
      previous.nextNode = null;
    } else {
      this.head = null;
    }

    return current.value;
  }
  contains(value) {
  let current = this.head;

  while (current !== null) {
    if (current.value === value) {
      return true;
    }
    current = current.nextNode;
  }

  return false;
}
find(value) {
  let current = this.head;
  let index = 0;

  while (current !== null) {
    if (current.value === value) {
      return index;
    }
    current = current.nextNode;
    index++;
  }

  return null;
}
toString() {
  let current = this.head;
  let result = '';

  while (current !== null) {
    result += `(${current.value}) -> `;
    current = current.nextNode;
  }

  result += 'null';
  return result;
}
 insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      throw new Error('Index out of range');
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let currentIndex = 0;

      while (currentIndex < index) {
        previous = current;
        current = current.nextNode;
        currentIndex++;
      }

      previous.nextNode = newNode;
      newNode.nextNode = current;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error('Index out of range');
    }

    if (index === 0) {
      this.head = this.head.nextNode;
    } else {
      let current = this.head;
      let previous = null;
      let currentIndex = 0;

      while (currentIndex < index) {
        previous = current;
        current = current.nextNode;
        currentIndex++;
      }

      previous.nextNode = current.nextNode;
    }
  }
}


class Node {
  constructor(value = null, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
  }

  
}

// Create a new linked list
const linkedList = new LinkedList();

// Append nodes
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

// Prepend a node
linkedList.prepend(0);

// Print the linked list
console.log(linkedList.toString());

// Get the head and tail nodes
console.log("Head:", linkedList.head);
console.log("Tail:", linkedList.tail());

// Get the size of the linked list
console.log("Size:", linkedList.size());

// Check if the linked list contains a value
console.log("Contains 2:", linkedList.contains(2)); // true
console.log("Contains 5:", linkedList.contains(5)); // false

// Find the index of a value
console.log("Index of 2:", linkedList.find(2)); // 1
console.log("Index of 5:", linkedList.find(5)); // null

// Insert a value at a specific index
linkedList.insertAt(4, 2);

// Print the updated linked list
console.log(linkedList.toString());

// Remove a node at a specific index
linkedList.removeAt(1);

// Print the updated linked list
console.log(linkedList.toString());