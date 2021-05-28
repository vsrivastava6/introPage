

console.log();

const button = document.getElementById('button');
const input = document.getElementById('input');
const output = document.getElementById('output');

const title = localStorage.getItem('title');
if (title) {
  input.const = title;
}
;

const random = Math.floor(Math.random() * explanation.length);
console.log(random, explanation[random]);
if (explanation) {
    output.innerHTML = explanation;
}
const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]

   var r_text = new Array ();
r_text[0] = 'This movie is about a dude with a stick...';
r_text[1] = 'This movie is about people who go on holiday...';
r_text[2] = 'This movie is about a rectangle...';
r_text[3] = 'This movie is about a chick, she has the worst memory...';
r_text[4] = 'In this movie, car go fast...';
r_text[5] = 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...'
r_text[6] = 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...'
r_text[7] = 'In this movie everyone is like sleeping all the time...'
r_text[8] = 'In this movie some kids die and an angel escorts them to heaven...'
r_text[9] ='In this movie some small guys go for a walk...'

var r = r_text.length;
var whichquote=Math.round(Math.random()*(r-1));
function showquote(){document.write(quotes[whichquote]);}
showquote();

button.addEventListener('click', () => {

  if ( input.const == ) {
    output.innerHTML = 'Correct!';
  } else {
    output.innerHTML = 'The guess was incorrect';
  }

  localStorage.setItem('number', number);
});

