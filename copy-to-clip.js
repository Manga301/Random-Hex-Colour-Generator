export default function copyColour(elem, hexVal){

    const colourEl = elem.querySelector(".hex-value")

    navigator.clipboard.writeText(hexVal).then(function(){

        colourEl.innerText = "Copied"
        setTimeout(() => colourEl.innerHTML = hexVal, 1000)

    })
}