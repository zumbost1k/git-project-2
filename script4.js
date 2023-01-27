function hof(number) {//это название с кодварса
  const firstSequence = [1]
  const secondSequence = [2]
  while (firstSequence.length - 1 !== number) {
    firstSequence.push(firstSequence[firstSequence.length - 1] + secondSequence[firstSequence.length - 1])
    if (firstSequence.includes(secondSequence[secondSequence.length - 1] + 1)) { secondSequence.push(secondSequence[secondSequence.length - 1] + 2) }
    else (secondSequence.push(secondSequence[secondSequence.length - 1] + 1))
  }
  return firstSequence[number]
}
hof(100000)
