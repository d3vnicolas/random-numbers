export function onlyNumbersInput(inputs) {
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      input.value = input.value.replace(/\D/g, "")
    })
  })
}

export function limitNumb(input, limit = 6) {
  input.oninput = () => {
    parseInt(input.value) > limit ? (input.value = limit) : false
  }
}
