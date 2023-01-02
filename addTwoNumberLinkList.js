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


var addTwoNumbers = function (l1, l2) {
  let stackl1 = [];
  let stackl2 = [];
  while (l1) {
    stackl1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stackl2.push(l2.val);
    l2 = l2.next;
  }
  let v1 = 0;
  let v2 = 0;
  for (let i = 0; i < stackl1.length; i++) {
    v1 = v1 + (stackl1[i] * Math.pow(10, i));

  }
  for (let ii = 0; ii < stackl2.length; ii++) {
    v2 = v2 + (stackl2[ii] * Math.pow(10, ii));

  }
  let sum = (v1 + v2).toString().split("").reverse().join("");
  let Head = new ListNode(Number(sum[0]));
  let nextNode = Head;
  for (let k = 1; k < sum.length; k++) {
    let newNode = new ListNode(Number(sum[k]))
    nextNode.next = newNode;
    nextNode = nextNode.next;
  }
  return Head
};

console.log(addTwoNumbers(convertArrayIntoList([2, 4, 3]), convertArrayIntoList([5, 6, 4])));