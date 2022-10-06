var mergeTwoLists = function(list1, list2) {

  let firstListPointer = list1;
  let secondListPointer = list2;

  let newListPointer = new ListNode();
  const linkedListPointer = newListPointer;

  while(firstListPointer && secondListPointer) {
      if(firstListPointer.val < secondListPointer.val) {
          newListPointer.next = firstListPointer;
          firstListPointer = firstListPointer.next;
      } else {
          newListPointer.next = secondListPointer;
          secondListPointer = secondListPointer.next;
      }
         newListPointer = newListPointer.next;
  }

while(firstListPointer) {
      newListPointer.next = firstListPointer;
      firstListPointer = firstListPointer.next;

      newListPointer = newListPointer.next;
  }

  while(secondListPointer) {
      newListPointer.next = secondListPointer;
      secondListPointer = secondListPointer.next;

      newListPointer = newListPointer.next;
  }

  return linkedListPointer.next;

  
};