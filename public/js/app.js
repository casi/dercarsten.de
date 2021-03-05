// set js switchable link when js is not blocked
document.getElementsByTagName('a')[0].href = '#';
document.getElementsByTagName('a')[0].setAttribute('onclick', 'showQuote()');

let index = 0;
// iterates over all quotes with every click on reload link
function showQuote() {
  // when exactly the last array element is reached, start over next time
  if (index == quotes.length-1) {
    document.getElementsByTagName('pre')[0].innerHTML = quotes[index];
    index = 0;
  } else {
    document.getElementsByTagName('pre')[0].innerHTML = quotes[index];
    index++;
  }
}
