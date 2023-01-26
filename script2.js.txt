let obj = {
    data: 'A',
    left: Node = {
      data: 'B',
      left: Node = {
        data: 'D',
        left: Node = {
          data: 'H',
          left: undefined,
          right: undefined
  
        },
        right: undefined
      },
      right: Node = {
        data: 'E',
        left: undefined,
        right: undefined
      }
    },
    right: Node = {
      data: 'C',
      left: Node = {
        data: 'F',
        left: Node = {
          data: 'I',
          left: undefined,
          right: undefined
        },
        right: undefined
      },
      right: Node = {
        data: 'G',
        left: undefined,
        right: Node = {
          data: 'J',
          left: Node = {
            data: 'K',
            left: undefined,
            right: undefined
          },
          right: Node = {
            data: 'L',
            left: undefined,
            right: undefined
          }
        }
      }
    }
  }

function serpentineTree(node) {
  const queue = []
  function binarTree(arrnode, level) {
    const levelArr = []
    if (arrnode.length === 0) { return 0 }
    while (arrnode.length) {
      const element = arrnode.shift()
      queue.push(element.data)
      if (element.right) { levelArr.push(element.right) }
      if (element.left) { levelArr.push(element.left) }
    };
    if (level % 2 == 0) { return binarTree(levelArr, level + 1) }
    else { return binarTree(levelArr.reverse(), level + 1) }
  }
  binarTree([node], 0)
  return queue
}
console.log(serpentineTree(obj))