// Track the score
let score = 0;

// Get the gem element
const gem = document.getElementById("gem");

// Get the score element
const scoreElement = document.getElementById("score");

// Function to increment the score and update the display
function incrementScore() {
  score++;
  scoreElement.textContent = score;
}

// Add a click event listener to the gem
gem.addEventListener("click", incrementScore);
