export function setupUI(onSubmit) {
    const input = document.getElementById("answer-input");
    const button = document.getElementById("submit-btn");

    button.addEventListener("click", () => {
        onSubmit(input.value);
        input.value = "";
        input.focus();
    });

    input.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            onSubmit(input.value);
            input.value = "";
        }
    });
}

export function updateScoreDisplay(score) {
    document.getElementById("score").textContent = score;
}

export function updateTimerDisplay(time) {
    document.getElementById("timer").textContent = time;
}