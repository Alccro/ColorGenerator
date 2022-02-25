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
const copyToClipboard = document.getElementById("copyToClipboard");
const hexId = document.querySelectorAll(".hexId");
const container = document.getElementById("container");
const navBar = document.getElementById("navBar");
const paletteBox = document.getElementById("paletteBox");
const header = document.getElementById("header");
const explanation = document.getElementById("explanation");

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
let storageArray = createRandomHexArray();

/*assigning Hex number's to the five color boxes*/
const assignRandomHex = () => {
    colorOneBox.style.backgroundColor = storageArray[0];
    colorOneHex.innerText = storageArray[0];
    colorTwoBox.style.backgroundColor = storageArray[1];
    colorTwoHex.innerText = storageArray[1];
    colorThreeBox.style.backgroundColor = storageArray[2];
    colorThreeHex.innerText = storageArray[2];
    colorFourBox.style.backgroundColor = storageArray[3];
    colorFourHex.innerText = storageArray[3];  
    colorFiveBox.style.backgroundColor = storageArray[4];
    colorFiveHex.innerText = storageArray[4];
    header.style.backgroundColor = storageArray[0];
    navBar.style.backgroundColor = storageArray[1];
    paletteBox.style.backgroundColor = storageArray[2];
    container.style.backgroundColor = storageArray[3];
    explanation.style.color = storageArray[4];
}
assignRandomHex();

/*event listeners for getting new palette on click and spacebar*/
newPalette.addEventListener("click", () => {
    storageArray = createRandomHexArray();
    assignRandomHex();
    copyToClipboard.innerText = "Click hex number to copy to clipboard"
})

window.addEventListener("keypress", (e) => {
    if(e.key === "space") {
        assignRandomHex();
     }
})

/*event listener for copy to clipboard*/
hexId.forEach(hex => {
    hex.addEventListener("click", event => {
        navigator.clipboard.writeText(hex.innerText);
        copyToClipboard.innerText = "Copied " + hex.innerText;
    })
})

