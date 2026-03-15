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

/**
 *
 * @param {number[]} numbers
 * @param {node} container
 */
export function insertNumbersOnDom(numbers, container) {
  container.innerHTML = ""

  numbers.forEach((num) => {
    let numbContainer = document.createElement("div")
    let backPurple = document.createElement("i")
    let numbElement = document.createElement("span")
    numbContainer.classList.add("number")
    numbElement.innerText = num
    numbContainer.appendChild(backPurple)
    numbContainer.appendChild(numbElement)
    container.appendChild(numbContainer)
  })
}

export default drawnNumbers
