const colorOneBox = document.getElementById("colorOneBox");
const colorOneHex = document.getElementById("colorOneHex");
const colorTwoBox = document.getElementById("colorTwoBox");
const colorTwoHex = document.getElementById("colorTwoHex");
const colorThreeBox = document.getElementById("colorThreeBox");
const colorThreeHex = document.getElementById("colorThreeHex");
const colorFourBox = document.getElementById("colorFourBox");
const colorFourHex = document.getElementById("colorFourHex");
const colorFiveBox = document.getElementById("colorFiveBox");
const colorFiveHex = document.getElementById("colorFiveHex");
const newPalette = document.getElementById("newPalette");

/*Creating a single random hex number*/
const generateRandomHex = () => {
    let color = "#";
    for (let i = 0; i < 6; i++){
        const number = Math.random();
        const hexnumber = Math.floor((number * 16))
        color += (hexnumber).toString(16);
    }
    return color;
}

/*Creating five hex number's to assign to the palette*/
let createRandomHexArray = () => {
    let randomHexArray = [];
    for (let i = 0; i < 5; i++){
        randomHexArray.push(generateRandomHex());
    }
    return randomHexArray;
}

/*assigning Hex number's to the five color boxes*/
const assignRandomHex = () => {
    colorOneBox.style.backgroundColor = createRandomHexArray()[0];
    colorOneHex.innerText = createRandomHexArray()[0];
    colorTwoBox.style.backgroundColor = createRandomHexArray()[1];
    colorTwoHex.innerText = createRandomHexArray()[1];
    colorThreeBox.style.backgroundColor = createRandomHexArray()[2];
    colorThreeHex.innerText = createRandomHexArray()[2];
    colorFourBox.style.backgroundColor = createRandomHexArray()[3];
    colorFourHex.innerText = createRandomHexArray()[3];  
    colorFiveBox.style.backgroundColor = createRandomHexArray()[4];
    colorFiveHex.innerText = createRandomHexArray()[4];
}

assignRandomHex()

/*event listeners for getting new palette on click and spacebar*/
window.addEventListener("keypress", (e) => {
    if(e.key === "space") {
        assignRandomHex();
     }
})

newPalette.addEventListener("click", () => assignRandomHex());

/*event listener for copy to clipboard*/
const hexId = document.querySelectorAll(".hexId")

hexId.forEach(hex => {
    hex.addEventListener("click", event => {
        navigator.clipboard.writeText(hex.innerText);
        alert("Copied Hex nr: " + hex.innerText + " to clipboard");
    })
})
