function serpentineTree(node) {
  const queue = []
  function binarTree(arrnode, level) {
    const levelArr = []
    if (arrnode.length === 0) { return 0 }
    while (arrnode.length) {
      const element = arrnode.shift()
      queue.push(element.data)
      if (level % 2 == 1) {
        if (element.right) { levelArr.push(element.right) }
        if (element.left) { levelArr.push(element.left) }
      }
      else {
        if (element.left) { levelArr.push(element.left) }
        if (element.right) { levelArr.push(element.right) }

      }
    };
     return binarTree(levelArr.reverse(), level + 1) 
    
  }
  binarTree([node], 0)
  return queue
}