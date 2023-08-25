const arr = [
  [1, 2, 5],
  [4, 5, 6],
  [7, 8, 9]
]

output = {
  sumltr: 0,
  sumrtl: 0,
  difference: 0,
}


// * i = OUTER, j = INNER
let j = arr.length - 1;
for (let i = 0; i < arr.length; i++) {
  output.sumltr += arr[i][i]
  if (j > -1) {
    output.sumrtl += arr[i][j]
    j--
  }
}

output.difference = output.sumrtl - output.sumltr
console.log(output)
