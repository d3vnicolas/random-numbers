// function drawnNumbers(qty, from, to, allowRepeats = true) {
//   const numbers = []

//   if (!allowRepeats && qty > to - from + 1) {
//     throw new Error("Impossible to draw without repetition in this interval")
//   }

//   for (let i = 0; i < qty; i++) {
//     let drawn = randomInt(from, to)

//     if (!allowRepeats) {
//       while (numbers.includes(drawn)) {
//         drawn = randomInt(from, to)
//       }
//     }

//     numbers.push(drawn)
//   }

//   return numbers
// }

// function randomInt(from, to) {
//   return Math.floor(Math.random() * (to - from + 1)) + from
// }

// export default drawnNumbers

/**
 *
 * @param {number} qty number of numbers that will be drawn
 * @param {number} from interval from
 * @param {number} to interval to
 * @returns number array
 */
function drawnNumbers(qty, from, to, allowRepeats = true) {
  if (!allowRepeats && qty > to - from + 1) {
    throw new Error("Combinação impossível de sortear.")
  }

  if (allowRepeats) {
    return Array.from({ length: qty }, () => randomInt(from, to))
  }

  const numbers = new Set()

  while (numbers.size < qty) {
    numbers.add(randomInt(from, to))
  }

  return [...numbers]
}

/**
 *
 * @param {number} from
 * @param {number} to
 * @returns random number between from to args
 */
function randomInt(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from
}

export default drawnNumbers
