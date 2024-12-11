let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = document.getElementById('guess').value;
    const result = document.getElementById('result');

    if (userGuess == randomNumber) {
        result.textContent = '¡Felicidades! Adivinaste el número.';
        result.style.color = 'green';
    } else if (userGuess > randomNumber) {
        result.textContent = 'El número es menor. Intenta de nuevo.';
        result.style.color = 'red';
    } else {
        result.textContent = 'El número es mayor. Intenta de nuevo.';
        result.style.color = 'red';
    }
}