// Color Palette Generator //

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
const hexId = document.querySelectorAll(".hexId");

// Creating a single random hex number //
const generateRandomHex = () => {
    let color = "#";
    for (let i = 0; i < 6; i++){
        const number = Math.random();
        const hexnumber = Math.floor((number * 16))
        color += (hexnumber).toString(16);
    }
    return color;
}

// Creating five hex number's to assign to the palette //
let createRandomHexArray = () => {
    let randomHexArray = [];
    for (let i = 0; i < 5; i++){
        randomHexArray.push(generateRandomHex());
    }
    return randomHexArray;
}
let storageArray = createRandomHexArray();

// assigning Hex number's to the five color boxes and backgrounds //
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
}
assignRandomHex();

// event listeners for getting new palette on click and spacebar //
document.addEventListener("keypress", (s) => {
    if(s.key === "space") {
        assignRandomHex();
     }
});

newPalette.addEventListener("click", () => {
    storageArray = createRandomHexArray();
    assignRandomHex();
    copyToClipboard.innerText = "Click hex number to copy to clipboard";
});

// event listener for copy to clipboard //
hexId.forEach(hex => {
    hex.addEventListener("click", event => {
        navigator.clipboard.writeText(hex.innerText);
        copyToClipboard.innerText = "Copied " + hex.innerText;
    })
});

// Color Gradient Generator //

const textGradient = document.getElementById("textGradient");
const textColor1 = document.getElementById("textColor1");
const textColor2 = document.getElementById("textColor2");
const backgroundGradient = document.getElementById("backgroundGradient");
const backgroundColor1 = document.getElementById("backgroundColor1");
const backgroundColor2 = document.getElementById("backgroundColor2");

const setTextGradient = () => {
    textGradient.style.backgroundImage = "linear-gradient(to right, " 
    + textColor1.value 
    + ", " 
    + textColor2.value
    ")";
    textGradient.style.backgroundClip = "text";
    textGradient.style.webkitbackgroundClip = "text";
 	textGradient.style.Color = "transparent";
}

const setBackgroundGradient = () => {
    backgroundGradient.style.backgroundImage = "linear-gradient(to right, " 
    + backgroundColor1.value 
    + ", " 
    + backgroundColor2.value
    ")";
}

// Event listeners for gradient colors //

textColor1.addEventListener("input", setTextGradient);

textColor2.addEventListener("input", setTextGradient);

backgroundColor1.addEventListener("input", setBackgroundGradient);

backgroundColor2.addEventListener("input", setBackgroundGradient);


