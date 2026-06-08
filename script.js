function toggleMode() {
  let html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  let img = document.querySelector("#profile img")
  // substituir a img
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light-mode.png")
  } else {
    img.setAttribute('src', './assets/avatar.png')
  }
}
