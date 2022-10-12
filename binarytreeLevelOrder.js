var levelOrder = function(root) {
  let ans = [], queue = [];
  if(!root) return [];
  queue.push(root);
  while(queue.length>0){
      let size = queue.length, list = [];
      for(let i=0; i<size; i++){
          let currentNode = queue.shift();
          list.push(currentNode.val);
          if(currentNode.left){
              queue.push(currentNode.left);
          }
          if(currentNode.right){
              queue.push(currentNode.right);
          }
      }
      ans.push(list);
  }
  
  return ans;
};