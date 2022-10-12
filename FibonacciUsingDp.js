var fib = function(n) {
  let newFib = [] ;
  newFib[0] = 0 ;
  newFib[1] = 1;
  
  for(let i = 2 ; i <= n ; i++){
      newFib[i] = newFib[i -1 ] + newFib[i -2 ] 
  }
  
  return newFib[n];
  
  
};
console.log(fib(4));
console.log(fib(2));