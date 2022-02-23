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
const createRandomHexArray = () => {
    let randomHexArray = [];
    for (let i = 0; i < 5; i++){
        randomHexArray.push(generateRandomHex());
    }
    return randomHexArray;
}

const assignRandomHex = () => {
    colorOneBox.style.backgroundColor = createRandomHexArray[0];
    colorOneHex.innertext = createRandomHexArray[0];
    colorTwoBox.style.backgroundColor = createRandomHexArray[1];
    colorTwoHex.innertext = createRandomHexArray[1];
    colorThreeBox.style.backgroundColor = createRandomHexArray[2];
    colorThreeHex.innertext = createRandomHexArray[2];
    colorFourBox.style.backgroundColor = createRandomHexArray[3];
    colorFourHex.innertext = createRandomHexArray[3];  
    colorFiveBox.style.backgroundColor = createRandomHexArray[4];
    colorFiveHex.innertext = createRandomHexArray[4];
}

assignRandomHex()

newPalette.addEventListener("click", () => assignRandomHex);
