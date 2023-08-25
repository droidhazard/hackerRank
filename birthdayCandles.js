const candles = [4, 2, 3, 4]

let tallest = 0
let occurences = 0

// * Loop over the array to find The Tallest Unit
candles.forEach((candle) => {
  if (candle > tallest) {
    tallest = candle
  }
})

// * Count occurences of the tallest unit

candles.forEach((candle) => {
  if (candle == tallest) {
    occurences++
  }
})

console.log(occurences)