const n = 4
let string = ''

// * Add n amount of spaces in the 'string' for each main iteration
for (let j = n; j > 0; j--) {
  string += ' '
  // console.log(string)
}

// * Main loop iteration
for (let i = n - 1; i > -1; i--) {
  string = string.split('')
  string[i] = '#'
  string = string.join('')
  console.log(string)
  // console.log(i)
}