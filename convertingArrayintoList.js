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
