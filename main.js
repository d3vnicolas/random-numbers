import { toggleClass as toggleActiveClass } from "./scripts/handleInputAnimation.js"
import drawnNumbers from "./scripts/drawnNumbers.js"
import { onlyNumbersInput } from "./scripts/handleInputs.js"
import { Animations } from "./scripts/resultAnimation.js"

document.addEventListener("DOMContentLoaded", function () {
  const wrapperInputs = document.querySelectorAll("[data-toggle-class]")
  const boardResult = document.querySelector("[data-result]")
  const boardForm = document.querySelector("[data-form]")
  const form = document.querySelector("[data-form-drawn]")
  const inputQty = document.querySelector("#numbersqty")
  const inputFrom = document.querySelector("#numbersfrom")
  const inputTo = document.querySelector("#numbersto")
  const repeat = document.querySelector("#numbersrepeat")

  onlyNumbersInput([inputQty, inputFrom, inputTo])

  wrapperInputs.forEach((element) => {
    toggleActiveClass(element)
  })

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    boardResult.style.minHeight = boardForm.offsetHeight + "px"
    Animations.fadeOut(boardForm, 400, () => {
      boardResult.style.display = "flex"
      Animations.fadeIn(boardResult, 400, "flex")
    })

    let results = drawnNumbers(
      parseInt(inputQty.value),
      parseInt(inputFrom.value),
      parseInt(inputTo.value),
      !repeat.checked,
    )
  })
})
