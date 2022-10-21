function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function convertArrayIntoList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = new ListNode(array[i], list);
  }
  return list;
}

var oddEvenList = function (head) {
  if (!head || !head.next) {
    return head
  }
  let odd = head;
  let even = head.next;
  while (even && even.next) {
    let temp = odd.next;
    odd.next = even.next;
    even.next = even.next.next;
    odd.next.next = temp;
    odd = odd.next;
    even = even.next;
  }
  return head;
};

console.log(oddEvenList(convertArrayIntoList([1, 2, 3, 4, 5])));