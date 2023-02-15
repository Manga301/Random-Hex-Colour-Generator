const refreshBtn = document.querySelector(".refresh-btn")
let container = document.querySelector(".container")
const maxColourBoxes = 8;

refreshBtn.addEventListener("click", generateColours)

function generateColours(){
    container.innerHTML = ""
    
    for(let i = 0; i < maxColourBoxes; i++){
        
        const boxColourEl = document.createElement("li")
        boxColourEl.innerHTML = ""

        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
        randomHex = `#${randomHex.padStart(6,"0")}`

        
        boxColourEl.classList.add("color")
        boxColourEl.innerHTML = `<div class="rect-box" style="background-color: ${randomHex}"></div>
                                <span class="hex-value">${randomHex}</span>`

        container.appendChild(boxColourEl)

        // event listener to current li element to copy colour
        boxColourEl.addEventListener("click", function(){
            copyColour(boxColourEl, randomHex)
        })
    }
}

// runs on page load
generateColours()

function copyColour(elem, hexVal){
    const colourEl = elem.querySelector(".hex-value")
    navigator.clipboard.writeText(hexVal).then(function(){
        colourEl.innerText = "Copied"

        setTimeout(() => colourEl.innerHTML = hexVal, 1000)
    })
}