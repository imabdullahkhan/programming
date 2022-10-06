
var TimeMap = function() {
   this.map = new Map();
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
  console.log(this);
    if(this.map.has(key))
    {
        this.map.get(key).push([value, timestamp]);
    }else{
        this.map.set(key, [[value, timestamp]]);
    }
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
    if(this.map.has(key) == false) return "";
    let arr = this.map.get(key);
    let answer  = closestPoint(arr, timestamp);
    function closestPoint(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            if(arr[mid][1] == target) return arr[mid][0];
            if(arr[mid][1] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        if(right < 0) return "";
        return arr[right][0];
    }
    return answer;
};

/** 
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/

let timeMap = new TimeMap();
timeMap.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.get("foo", 1); // return "bar"
timeMap.get("foo", 3); // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 ie "bar".
timeMap.set("foo", "bar2", 4);
timeMap.get("foo", 4); // return "bar2"
timeMap.get("foo", 5); // return "bar2"



timeMap.set("love", "high", 10);
timeMap.set("love", "low", 20);
timeMap.get("love", 5); // return ""
timeMap.get("love", 10); // return "high"
timeMap.get("love", 15); // return "high"
timeMap.get("love", 20); // return "low"
timeMap.get("love", 25); // return "low"