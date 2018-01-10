const now = new Date();
const initialOffset = (1000 - now.getMilliseconds()) % 1000;

const secondHand = document.querySelector('.hand-second'),
			minuteHand = document.querySelector('.hand-minute'),
			hourHand = document.querySelector('.hand-hour');

let secondsDeg = ((now.getSeconds() / 60) * 360) + 90,
		minutesDeg = ((now.getMinutes() / 60) * 360) + 90,
		hoursDeg = (((now.getHours() % 12) / 12) * 360) + 90;

rotate(secondsDeg, minutesDeg, hoursDeg);

setTimeout(() => {
	setDate();
	setInterval(setDate, 1000);
}, initialOffset);


function setDate() {
	const now = new Date();
	
	secondsDeg += 6;
	
	if (now.getSeconds() === 0)
		minutesDeg += 6;
	
	hoursDeg = (((now.getHours() % 12) / 12) * 360) + 90;
	
	rotate(secondsDeg, minutesDeg, hoursDeg);
}

function rotate(secondsDeg, minutesDeg, hoursDeg) {
	secondHand.style.transform = `rotate(${secondsDeg}deg) scaleX(0.75)`;
	minuteHand.style.transform = `rotate(${minutesDeg}deg) scaleX(0.75)`;
	hourHand.style.transform = `rotate(${hoursDeg}deg) scaleX(0.5)`;
}
