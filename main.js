import {
  toggleClass as toggleActiveClass,
  animateDrawn,
  animateRestart,
} from "./scripts/handleInputAnimation.js"
import drawnNumbers, { insertNumbersOnDom } from "./scripts/drawnNumbers.js"
import { onlyNumbersInput, limitNumb } from "./scripts/handleInputs.js"

document.addEventListener("DOMContentLoaded", function () {
  const wrapperInputs = document.querySelectorAll("[data-toggle-class]")
  const form = document.querySelector("[data-form-drawn]")
  const inputQty = document.querySelector("#numbersqty")
  const inputFrom = document.querySelector("#numbersfrom")
  const inputTo = document.querySelector("#numbersto")
  const repeat = document.querySelector("#numbersrepeat")
  const showPlays = document.querySelector("[data-show-plays]")
  const btnRestart = document.querySelector("[data-redrawn-btn]")
  window.plays = 0

  onlyNumbersInput([inputQty, inputFrom, inputTo])
  limitNumb(inputQty, 8)

  wrapperInputs.forEach((element) => {
    toggleActiveClass(element)
  })

  btnRestart.addEventListener("click", () => animateRestart())
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    window.plays++
    showPlays.innerText = `${window.plays}° Resultado`
    let results = drawnNumbers(
      parseInt(inputQty.value),
      parseInt(inputFrom.value),
      parseInt(inputTo.value),
      !repeat.checked,
    )
    insertNumbersOnDom(results, document.querySelector("[data-show-numbers]"))
    animateDrawn()
  })
})
