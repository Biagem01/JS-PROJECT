document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".buttons");

    // Creazione degli elementi
    const minusButton = document.createElement("button");
    const numberDisplay = document.createElement("div");
    const plusButton = document.createElement("button");
    const resetButton = document.createElement("button");

    // Aggiunta delle classi
    minusButton.classList.add("minus");
    numberDisplay.classList.add("number");
    plusButton.classList.add("plus");
    resetButton.classList.add("reset");

    // Testo nei pulsanti
    minusButton.textContent = "-";
    numberDisplay.textContent = "0";
    plusButton.textContent = "+";
    resetButton.textContent = "RESET";

    // Creazione di un div separato per il pulsante reset
    const resetContainer = document.createElement("div");
    resetContainer.classList.add("reset-container"); // Per posizionarlo correttamente
    resetContainer.appendChild(resetButton);

    // Aggiunta degli elementi al DOM
    container.appendChild(minusButton);
    container.appendChild(numberDisplay);
    container.appendChild(plusButton);

    // Aggiunta del pulsante reset sotto
    container.parentNode.appendChild(resetContainer);

    let count = 0;

    const clickSound = new Audio("assets/audio/Click.mp3");
    const resetSound = new Audio("assets/audio/Reset.wav");

    function updateDisplay() {
        numberDisplay.textContent = count;
    }

    function playSound() {
        clickSound.currentTime = 0.4;
        clickSound.play();
    }

    function playResetSound() {
        resetSound.currentTime = 0;
        resetSound.play();
    }

    minusButton.addEventListener("click", function () {
        if (count == 0) {
            playSound();
            return;
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
