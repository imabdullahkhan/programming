

var leastInterval = function (tasks, n) {
  let map = new Map();
  let max = 0;
  let maxCount = 0;
  for (let task of tasks) {
    let count = map.get(task) || 0;
    count++;
    map.set(task, count);
    if (count > max) {
      max = count;
      maxCount = 1;
    } else if (count === max) {
      maxCount++;
    }
  }
  let partCount = max - 1;
  let partLength = n - (maxCount - 1);
  let emptySlots = partCount * partLength;
  let availableTasks = tasks.length - max * maxCount;
  let idles = Math.max(0, emptySlots - availableTasks);
  return tasks.length + idles;

  


};
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));