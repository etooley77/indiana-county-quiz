import { counties } from "./data/counties.js";
import { highlightCounty, completeCounty } from "./svg.js";

/**
 * @class Game
 * @param {function(number):void} updateScore - Callback to update the score display, receives the new score as an argument.
 * @param {function():void} pickNext - Callback to pick the next county or update the UI accordingly.
 */
export class Game {
	constructor(updateScore, pickNext) {
		this.score = 0;
		this.remaining = [...counties];
		this.updateScore = updateScore;
		this.pickNext = pickNext;
	}

	nextCounty() {
		const index = Math.floor(Math.random() * this.remaining.length);
		this.current = this.remaining[index];
		if (this.current) {
			highlightCounty(this.current.replace(/\s+/g, ""));
		}
		return this.current;
	}

	submit(answer) {
		if (answer.trim().toLowerCase() === this.current.toLowerCase()) {
			this.score++;
			this.updateScore(this.score);
			completeCounty(this.current.replace(/\s+/g, ""))
			this.remaining = this.remaining.filter(c => c !== this.current);
			if (this.remaining.length > 0) {
				this.nextCounty();
			} else {
				this.current = null;
			}
			return true;
			}
	}
}