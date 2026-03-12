import { toggleClass } from "./scripts/handleInputAnimation.js"

document.addEventListener("DOMContentLoaded", function () {
  const wrapperInputs = document.querySelectorAll("[data-toggle-class]")

  wrapperInputs.forEach((element) => {
    toggleClass(element)
  })
})
