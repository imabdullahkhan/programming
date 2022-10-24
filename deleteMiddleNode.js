function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}


export function convertArrayIntoList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = new ListNode(array[i], list);
  }
  return list;
}


var deleteMiddle = function (head) {
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  if (prev) {
    prev.next = slow.next;

  }else{
    return null
  }
  return head;

};
console.log(deleteMiddle(convertArrayIntoList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])));