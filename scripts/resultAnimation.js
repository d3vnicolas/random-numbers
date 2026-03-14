function fadeOut(element, duration = 400, callback) {
  let start = null

  function animate(timestamp) {
    if (!start) start = timestamp

    const progress = timestamp - start
    const opacity = 1 - progress / duration

    element.style.opacity = Math.max(opacity, 0)

    if (progress < duration) {
      requestAnimationFrame(animate)
    } else {
      element.style.opacity = 0
      if (callback) callback()
      element.style.display = "none"
    }
  }

  requestAnimationFrame(animate)
}

function fadeIn(element, duration = 400, display = "block", callback) {
  let start = null

  element.style.opacity = 0
  element.style.display = display

  function animate(timestamp) {
    if (!start) start = timestamp

    const progress = timestamp - start
    const opacity = progress / duration

    element.style.opacity = Math.min(opacity, 1)

    if (progress < duration) {
      requestAnimationFrame(animate)
    } else {
      element.style.opacity = 1
      if (callback) callback()
    }
  }

  requestAnimationFrame(animate)
}

function showNumbers(numbers) {}

export const Animations = { fadeIn, fadeOut }
