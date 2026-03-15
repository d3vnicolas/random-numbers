import gsap from "../node_modules/gsap/index.js"

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

export function animateDrawn() {
  const boardResult = document.querySelector("[data-result]")
  const boardForm = document.querySelector("[data-form]")
  const container = document.querySelector("[data-show-numbers]")
  const numbersElements = container.querySelectorAll(".number")

  const tl = gsap.timeline()

  if (boardResult.offsetHeight > boardForm.offsetHeight) {
    tl.to(boardForm, {
      height: boardResult.offsetHeight,
      duration: 0.2,
      onComplete: () => {
        boardForm.style.display = "none"
        boardResult.style.position = "static"
        boardResult.classList.remove("md:-translate-y-1/2")
      },
    })
  }

  tl.to(boardForm, { autoAlpha: 0, duration: 0.4 }).to(
    boardResult,
    { autoAlpha: 1, duration: 0.4 },
    "<",
  )

  numbersElements.forEach((element) => {
    const bg = element.querySelector("i")
    const text = element.querySelector("span")

    const offset = container.offsetWidth / 2 - element.offsetLeft - element.offsetWidth / 2

    tl.fromTo(
      element,
      {
        autoAlpha: 0,
        x: offset,
        scale: 0,
      },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
    )

      // gira o fundo
      .to(bg, {
        rotation: 180,
        duration: 2,
        ease: "power2.out",
      })

      // fundo desaparece
      .to(bg, {
        autoAlpha: 0,
        duration: 0.3,
      })

      // texto fica roxo
      .to(
        text,
        {
          color: "#C58DE7",
          duration: 0.3,
        },
        "<",
      )
      .from(
        text,
        {
          fontSize: "64px",
        },
        "<",
      )

      // número vai para posição final
      .to(
        element,
        {
          x: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<",
      )
  })

  tl.fromTo(
    boardResult.querySelector(".wrapper-btn-redrawn"),
    {
      autoAlpha: 0,
      y: 32,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.3,
    },
  )
}

export function animateRestart() {
  const boardResult = document.querySelector("[data-result]")
  const boardForm = document.querySelector("[data-form]")

  const tl = gsap.timeline()

  boardResult.style.position = "absolute"
  boardResult.classList.add("md:-translate-y-1/2")

  tl.to(boardResult, {
    autoAlpha: 0,
    duration: 0.3,
  }).to(boardForm, {
    autoAlpha: 1,
    duration: 0.3,
    onComplete: () => (boardForm.style.display = "block"),
  })
}
