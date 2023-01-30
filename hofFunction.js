function hof(number) {//это название с кодварса
  const firstSequence = [1]
  let secondSequence = 2
  while (firstSequence.length - 1 !== number) {
    firstSequence.push(firstSequence[firstSequence.length - 1] + secondSequence)
    if (firstSequence.indexOf(secondSequence + 1) >= 0) { secondSequence += 2 }
    else (secondSequence += 1)
  }
  return firstSequence[number]
}