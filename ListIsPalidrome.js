var isPalindrome = function (head) {
  let leftToRightData = "";
  let rightToLeftData = "";

  let node = head;

  while (node) {
    leftToRightData += node.val;
    rightToLeftData = node.val + rightToLeftData;

    node = node.next;
  }

  return leftToRightData === rightToLeftData;
};