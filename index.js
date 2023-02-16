import generateColours from "./generate-colours.js"

const refreshBtn = document.querySelector(".refresh-btn")

refreshBtn.addEventListener("click", generateColours)

generateColours()