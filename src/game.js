import { counties } from "./data/counties.js";
import { highlightCounty, completeCounty } from "./svg.js";

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
    	highlightCounty(this.current.replace(/\s+/g, ""));
    	return this.current;
  	}

  	submit(answer) {
    	if (answer.trim().toLowerCase() === this.current.toLowerCase()) {
      		this.score++;
      		this.updateScore(this.score);
			completeCounty(this.current.replace(/\s+/g, ""))
      		this.remaining = this.remaining.filter(c => c !== this.current);
      		this.pickNext();
      		return true;
    	}
    	return false;
  	}
}