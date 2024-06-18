// quotes from people who inspire me
const QUOTES = ["\n \"Mondays are fine. It's your life\n that sucks.\"\n    \n - Ricky Gervais\n   Comedian",
	"\nFrom \"As You Like It\"\n    by William Shakespeare (1623)\n\n\"All the world's a stage,\nand all the men and women merely players;\nThey have their exits and their entrances;\nAnd one man in his time plays many parts\n[..]\"\n\n- Jaques\n",
	"\n\"The day we stop exploring is the day we\ncommit ourselves to live in a stagnant\nworld, devoid of curiosity, empty of\ndreams.\"\n\n- Neil deGrasse Tyson\n  Astrophysicist\n",
	"\n\"The freedom of Mankind does not lie in\nthe fact that we can do what we want, but\nthat we do not have to do that which we\ndo not want.\"\n\n— Jean-Jacques Rousseau\n  Philosopher\n",
	"\n\"If you change the way you look at things,\nthe things you look at change.\"\n\n- Wayne Dyer\n  Psychologist\n",
	"\n    CARSTEN BEHNERT    \n\n    Berlin, Germany\n\n\n"];

const d = new Date();
let initIndex = (d.getDay() === 1) ? 0 : 1; // Check whether the current day is Monday(1) or not
let i = initIndex;
let quoteInterval;
let isQuoteRunning = true;

function showQuote() {
	document.querySelector('pre').textContent = QUOTES[i];
	// When the last quote array element is reached, start again from initIndex
	(i === QUOTES.length - 1) ? i = initIndex : i++;
}

function startQuoteRotation() {
	showQuote();
	quoteInterval = setInterval(showQuote, 3000);
	document.getElementById('reload').textContent = "stop";
}

function stopQuoteRotation() {
	clearInterval(quoteInterval);
	isQuoteRunning = false;
	document.getElementById('reload').textContent = "start";
}

function startYearRotation() {
	const startYear = 2020;
	const endYear = d.getFullYear();
	let currentYear = startYear;

	setInterval(() => {
		let yearElement = document.getElementById('year');
		yearElement.textContent = currentYear;
		currentYear = (currentYear === endYear) ? startYear : currentYear + 1;
	}, 700);
}

window.onload = () => {
	const preTag = document.querySelector('pre');
	if (preTag) {
		startQuoteRotation();
	}
	startYearRotation();

	const reloadButton = document.getElementById('reload');
	if (reloadButton) {
		reloadButton.onclick = () => {
			if (isQuoteRunning) {
				stopQuoteRotation();
			} else {
				startQuoteRotation();
				isQuoteRunning = true;
			}
		};
	}
};
