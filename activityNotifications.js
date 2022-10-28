function activityNotifications(expenditure, d) {
  function GetMedian(numbers) {
    const sorted = Array.from(numbers).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
  }
  let median = GetMedian(expenditure.slice(0, d));
  let notifications = 0;
  for (let i = d; i < expenditure.length; i++) {
    if (expenditure[i] >= median * 2) {
      notifications++;
    }
    median = GetMedian(expenditure.slice(i - d + 1, i + 1));
  }

  return notifications;

}
