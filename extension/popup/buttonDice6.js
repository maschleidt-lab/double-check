// ##### Variables #####
// Variable to store the result of the dice roll
let dice6Result = document.getElementById("dice6Result");
let diceKeybind = "d"
// ##### Functions #####
// Function to generate a random number between 1 and 6
function rollDice6() 
{
let randomNumber6 = Math.floor(Math.random() * 6) + 1;
document.getElementById("dice6Result").textContent = "You rolled a " + randomNumber6 + " on a 6-sided die.";
}

// ##### Event Listeners #####
// Get the button element by its ID
document.getElementById("buttonDice6").addEventListener("click", rollDice6);
// Listen for the {Key} key, and trigger the rollDice6 function when pressed
document.addEventListener("keydown", rollDice6, diceKeybind);