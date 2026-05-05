export function startTimer(seconds, onTick, onEnd) {
  	let time = seconds;

  	const interval = setInterval(() => {
    	time--;
    	onTick(time);

    	if (time <= 0) {
      		clearInterval(interval);
      		onEnd();
    	}
  	}, 1000);

  	return interval;
}