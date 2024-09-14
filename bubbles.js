const section = document.querySelector('.image-slider')
const slides = section.querySelectorAll('div')

let index = 0

let pattern = [
    [4, 5, 3, 0, 0, 0],
    [4, 5, 3, 3, 0, 2],
    [0, 3, 3, 3, 1, 4],
    [0, 2, 3, 2, 3, 2],
    [0, 1, 2, 4, 3, 2],
    [1, 4, 2, 3, 3, 3],
]

let timeout


const nextSlide = () => {
  index += 1
  index %= pattern.length

  // o escoger un patrón sólido (en vez de pattern)
  section.style.gridTemplateColumns = pattern[index].map((p) =>{
    return `${p}fr`
  }).join(" ")
  
  slides.forEach((slide, slideIndex) => {
    if (pattern[index][slideIndex] === 0) {
      slide.classList.add("hide")
    } else {
      slide.classList.remove("hide")
    }
  })

   clearTimeout(timeout)
   timeout = setTimeout(nextSlide, 2000)
}

section.addEventListener("click", nextSlide)

timeout = setTimeout(nextSlide, 2000)
