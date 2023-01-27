function hof(n) {
  let A = [1]
  let B = [2]
  while (A.length - 1 !== n) {
    A.push(A[A.length - 1] + B[A.length - 1])
    if (A.includes(B[B.length - 1] + 1)) { B.push(B[B.length - 1] + 2) }
    else (B.push(B[B.length - 1] + 1))
  }
  return A[n]
}
console.log(hof(100000))
