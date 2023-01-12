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
  let sum = v1 + v2;
  //insert into list reverse order last to first
  let Head = null;
  let list = Head;
  if (sum == 0) {
    return new ListNode(0);
  }
  while (sum > 0) {
    let mod = sum % 10;
    let newNode = new ListNode(mod);
    if (Head == null) {
      Head = newNode;
      list = Head;
      sum = Math.floor(sum / 10);
    } else {
      list.next = newNode;
      list = list.next;
      sum = Math.floor(sum / 10);
    }

  }
  return Head;
};

console.log(addTwoNumbers(convertArrayIntoList([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), convertArrayIntoList([5, 6, 4])));