class QElement {
  constructor(element, Priority) {
    this.element = element;
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.item = [];
  }
  enqueue(element, priority) {
    let qElement = new QElement(element, priority);
    let contains = false;
    for (let i = 0; i < this.item.length; i++) {
      if (this.item[i].priority > qElement.priority) {
        contains = true;
        this.item.splice(i, 0, qElement);
      }
    }
    if (!contains) {
      this.item.push(qElement);
    }
  }
  isEmpty() {
    return this.items.length == 0;
  }
  dequeue() {
    if (this.isEmpty())
      return "Underflow";
    return this.items.shift();
  }

}
