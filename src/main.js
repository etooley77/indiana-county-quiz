import { loadSVG, readyAll } from "./svg.js";
import { Game } from "./game.js";
import { setupUI, updateScoreDisplay, updateTimerDisplay } from "./ui.js";
import { startTimer } from "./timer.js";

async function init() {
    await loadSVG();
    readyAll();

    const game = new Game(updateScoreDisplay, () => game.nextCounty());

    setupUI(answer => game.submit(answer));

    game.nextCounty();

    startTimer(
        180,
        updateTimerDisplay,
        () => alert("Time's up! Final score: " + game.score)
    );
}

init();