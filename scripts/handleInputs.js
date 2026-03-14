export function onlyNumbersInput(inputs) {
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      input.value = input.value.replace(/\D/g, "")
    })
  })
}
