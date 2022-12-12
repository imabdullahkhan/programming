var climbStairs = function (n) {
    if(n == 1){
        return 1;
    }
    if(n == 2){
        return 2;
    }
    if(n == 0){
        return 0;
    }
    
    let staris = [];
    staris[0] = 0;
    staris[1] = 1;
    staris[2] = 2;
    for (let i = 3; i < n; i++) {
        staris[i] = staris[i - 1] + staris[i - 2];
    }
   
    return staris[n - 1] +  staris[n - 2];
};
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(5));