/*
 * Complete the 'minOperations' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER threshold
 *  3. INTEGER d
 */

// equalizing array elements 
// Given an array of integers, transform it so that at least a certain number of elements in the array are equal. To achieve this, you can perform an operation where you select an element in the array and divide it by the given division parameter using integer division. What is the minimum number of operations that must be performed to achieve this goal on a certain array?
//. arr= [1, 2, 3, 4, 5]. If you divide the value 4 once and the value 5 once using integer division, you get the array [1, 2, 3, 2, 2], which contains 3 equal elements. There is no way to achieve this in less than 2 operations. Therefore, the answer is 2.
function minOperations(arr, threshold, d) {
    // Write your code here
    let count = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    while (sum / arr.length < threshold) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = Math.floor(arr[i] / d);
            sum += arr[i];
        }
        count++;
    }
    return count;
}
console.log(minOperations([1, 2, 3, 4, 5], 3, 2)) // 2

