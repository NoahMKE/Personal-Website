// Program 1: Coin Flip
const coinFlip = ["Heads", "Tails"];

const button = document.getElementById("coinButton");
const label = document.getElementById("coinLabel");
let randomIndex;

    button.onclick = function() {
    randomIndex = Math.floor(Math.random() * coinFlip.length);
    label.textContent = coinFlip[randomIndex];
    console.log(label.textContent);
}
// End Program 1

// Program 2: Random Number Generator
const rngButton = document.getElementById("rngbutton");
const rngLabel = document.getElementById("rngLabel");
const min = 1;
const max = 1000;
let randomNum;

rngButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    rngLabel.textContent = randomNum;
    console.log(rngLabel.textContent);
}
// End Program 2

// Program 3: Name Picker
const namePicker = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy"];

const nameButton = document.getElementById("nameButton");
const nameLabel = document.getElementById("nameLabel");
let randomIndexName;

nameButton.onclick = function() {
    randomIndexName = Math.floor(Math.random() * namePicker.length);
    nameLabel.textContent = namePicker[randomIndexName];
    console.log(nameLabel.textContent);
}
// End Program 3

// Program 4: Counter
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
// End Program 4

