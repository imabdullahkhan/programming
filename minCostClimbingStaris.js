var minCostClimbingStairs = function(cost) {
  var n = cost.length ;
    for(var i=2 ; i<n ; i++){
        cost[i] = Math.min(cost[i-1] , cost[i-2]) + cost[i];
    }
    return Math.min(cost[n-1] , cost[n-2]);
};
