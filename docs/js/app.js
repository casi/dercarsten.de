// quotes from people who inspire me
const QUOTES = ["\n \"Mondays are fine. It's your life\n that sucks.\"\n    \n - Ricky Gervais\n   Comedian",
"\nFrom \"As You Like It\"\n    by William Shakespeare (1623)\n\n\"All the world's a stage,\nand all the men and women merely players;\nThey have their exits and their entrances;\nAnd one man in his time plays many parts [..]\"\n\n- Jaques\n",
"\n\"The day we stop exploring is the day we\ncommit ourselves to live in a stagnant\nworld, devoid of curiosity, empty of\ndreams.\"\n\n- Neil deGrasse Tyson\n  Astrophysicist\n",
"\n\"The freedom of Mankind does not lie in\nthe fact that we can do what we want, but\nthat we do not have to do that which we\ndo not want.\"\n\n— Jean-Jacques Rousseau\n  Philosopher\n",
"\n\"If you change the way you look at things,\nthe things you look at change.\"\n\n- Wayne Dyer\n  Psychologist\n",
"\n    CARSTEN BEHNERT\n\n    Berlin, Germany\n\n\n"];

// show quote at first page load
window.onload = showQuote;
document.getElementById('reload').onclick = showQuote;

let d = new Date();
// set index for quote array. getDay() for monday is 1, sunday is 0... 
// so if today is monday, show first quote, otherwise show second quote etc.
let initIndex = (d.getDay() == 1) ? 0 : 1; 
let i = initIndex;

// iterate over all quotes with every click on reload link
function showQuote() {
  document.getElementsByTagName('pre')[0].innerHTML = QUOTES[i];
  // when exactly the last array element is reached, start over next time
  (i == QUOTES.length-1) ? i = initIndex : i++;
}
