import copyColour from "./copy-to-clip.js"

const container = document.querySelector(".container")
const maxColourBoxes = 12

export default function generateColours(){
    container.innerHTML = ""

    for(let i = 0; i < maxColourBoxes; i++){
        const boxColourEl = document.createElement("li")
        
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
        randomHex = `#${randomHex.padStart(6,"0")}`

        boxColourEl.classList.add("color")
        boxColourEl.innerHTML = `
                            <div 
                            class="rect-box"
                            style="background-color: ${randomHex}"></div>
                            <span class="hex-value">${randomHex}</span>
                            `
        
        container.appendChild(boxColourEl)

        boxColourEl.addEventListener("click", () => copyColour(boxColourEl, randomHex))
 
    }
}