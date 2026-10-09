// Get the button element by its ID
document.getElementById("buttonDice6").addEventListener("click", function(){
// Generate a random number between 1 and 6
function rollDice6() {
let randomNumber6 = Math.floor(Math.random() * 6) + 1;
document.getElementById("dice6Result").textContent = "You rolled a " + randomNumber6 + " on a 6-sided die.";
});