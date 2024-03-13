const diceContainer = document.getElementById("diceContainer");
const myinput = document.getElementById("myinput");
const myBtn = document.getElementById("myBtn");

let ranNumber;

const rollDice = () =>{
    let inputNumber = Number(myinput.value);
    let images = [];

    for(let i=1; i<=inputNumber; i++){
        ranNumber = Math.floor(Math.random() * 6 + 1);
        images.push(`<img src = "./src/${ranNumber}.jpg" alt = "${ranNumber}.jpg">`);
        //console.log(i)
    }

    diceContainer.innerHTML = images.join(" ")
}
