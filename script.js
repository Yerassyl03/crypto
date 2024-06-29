let coinCount = 0;
const coinCount_span = document.getElementById("coin-count");
const scissors_div = document.getElementById("scissors");
const paper_div = document.getElementById("paper");
const rock_div = document.getElementById("rock");

function updateCoins(amount) {
    coinCount += amount;
    coinCount_span.innerHTML = coinCount;
}

scissors_div.addEventListener('click', () => updateCoins(1));
paper_div.addEventListener('click', () => updateCoins(3));
rock_div.addEventListener('click', () => updateCoins(4));
