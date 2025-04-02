const screen = document.querySelector(".screen");
const screenVal = document.createElement("span");

const numberPad = document.querySelector(".buttons");
for(let i = 0; i < 10; i++){
    const numButton = document.createElement("button");
    numButton.textContent = `${i}`;
}
numberPad.appendChild(numButton);

screen.appendChild(screenVal);
