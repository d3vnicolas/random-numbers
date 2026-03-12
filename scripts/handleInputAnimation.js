/**
 *
 * @param {Node} element
 * @param {String} classToggle
 */
export function toggleClass(element, classToggle = "active") {
  const input = element.querySelector("input")

  element.addEventListener("mouseout", function () {
    if (!input.matches(":focus")) {
      element.classList.remove(classToggle)
    }
  })

  element.addEventListener("mouseover", function () {
    element.classList.add(classToggle)
  })

  input.addEventListener("focusout", function () {
    element.classList.remove(classToggle)
  })
}
