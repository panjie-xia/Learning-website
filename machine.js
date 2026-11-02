const secret = Math.floor(Math.random() * 10) + 1;
const output = document.getElementById("gameOutput");
document.getElementById("guessBtn").addEventListener("click", () => {
    const user = Math.floor(Math.random() * 10) + 1;
    if (user === secret) {
        output.textContent = `You guessed ${user}. Correct! You win.`;
    } else {
        output.textContent = `You guessed ${user}. The secret was ${secret}. Try again.`;
    }
});
