document.addEventListener("DOMContentLoaded", function () {
    const minusButton = document.querySelector(".minus");
    const plusButton = document.querySelector(".plus");
    const resetButton = document.querySelector(".reset");
    const numberDisplay = document.querySelector(".number");

    let count = 0;

    const clickSound = new Audio("assets/audio/Click.mp3");
    const resetSound = new Audio("assets/audio/Reset.wav");

    function updateDisplay() {
        numberDisplay.textContent = count;
    }

    function playSound(){
        clickSound.currentTime = 0.4; // Riavvia il suono se è già in riproduzione
        clickSound.play();
    }

    function playResetSound(){
        resetSound.currentTime=0;
        resetSound.play();
    }

    minusButton.addEventListener("click", function () {
        if(count==0){
            playSound();
            return
        }
        count--;
        updateDisplay();

        playSound();
    });

    plusButton.addEventListener("click", function () {
        count++;
        playSound();
        updateDisplay();
    });

    resetButton.addEventListener("click", function () {
        count = 0;
        playResetSound();
        updateDisplay();
    });

    updateDisplay();
});
