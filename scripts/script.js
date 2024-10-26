const startBlock = document.getElementById('start');
const endBlock = document.getElementById('end');
const statusElement = document.getElementById('status');
const walls = document.querySelectorAll('.boundary');

var play = false;

startBlock.addEventListener('mouseover', function() {
    if (play == false) {
        play = true;
        statusElement.textContent = "You've started the game!";
    }
});

walls.forEach(function(boundary) {
    boundary.addEventListener('mouseover', function() {
        if (play == true) {
            play = false;
            statusElement.textContent = "GAME OVER!";
        }
    });
});