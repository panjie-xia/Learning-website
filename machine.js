const secret = Math.floor(Math.random() * 10) + 1;
const btn = document.getElementById("guessBtn");
const output = document.getElementById("gameOutput");

btn.addEventListener("click", () => {
    const userPick = Math.floor(Math.random() * 10) + 1;
    if (userPick === secret) {
        output.textContent = `You guessed ${userPick}. Correct!`;
    } else {
        output.textContent = `You guessed ${userPick}. Wrong, the secret number is ${secret}.`;
    }
});
