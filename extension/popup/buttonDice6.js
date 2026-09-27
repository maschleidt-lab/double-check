//Variable to store the result of the dice roll
let dice6Result = null;

// Get the button element by its ID
document.getElementById("buttonDice6").addEventListener("click", function(){
// Generate a random number between 1 and 6
let randomNumber6 = Math.floor(Math.random() * 6) + 1;
dice6Result = randomNumber6;
//display the result in the paragraph element
document.getElementById("dice6Result").textContent = "You rolled a " + dice6Result;
})