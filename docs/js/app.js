// shows first quote at first page load
document.getElementsByTagName('body')[0].setAttribute('onload', 'showQuote()');
// set js switchable link
document.getElementById('reload').href = '#';
document.getElementById('reload').setAttribute('onclick', 'showQuote()');

let index = 0;
// iterates over all quotes with every click on reload link
function showQuote() {
  // when exactly the last array element is reached, start over next time
  if (index == QUOTES.length-1) {
    document.getElementsByTagName('pre')[0].innerHTML = QUOTES[index];
    index = 0;
  } else {
    document.getElementsByTagName('pre')[0].innerHTML = QUOTES[index];
    index++;
  }
}
