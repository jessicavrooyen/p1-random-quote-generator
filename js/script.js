/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// create an array of objects, each with 3-5 different properties
const quotes = [{
    quote: 'Nobody exists on purpose. Nobody belongs anywhere. We\'re all going to die. Come watch TV.',
    source: 'Morty',
    citation: 'Rixty Minutes',
    year: 2014,
    tags: ['alternate', 'realities']
  },
  {
    quote: 'Weddings are basically funerals with cake.',
    source: 'Rick',
    citation: 'The Weddings Squanchers',
    tags: ['true', 'dat']
  },
  {
    quote: 'Because I don\'t respect therapy; because I\'m a scientist; because I invent, transform, create, and destroy for a living, and when I don\'t like something about the world, I change it.',
    source: 'Rick',
    citation: 'Pickle Rick',
    year: 2017,
    tags: ['life', 'advice']
  },
  {
    quote: 'What, so everyone\'s supposed to sleep every single night now. You realize that nighttime makes up half of all time?',
    source: 'Rick',
    citation: 'Auto Erotic Assimilation',
    year: 2015
  },
  {
    quote: 'Listen Morty, I hate to break it to you, but what people call \'love\' is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science.',
    source: 'Rick Potion #9',
    year: 2014,
    tags: ['science is love', 'science is life']
  },
  {
    quote: 'Having a family doesn\'t mean that you stop being an individual. You know the best thing you can do for the people that depend on you? Be honest with them, even if it means setting them free.',
    source: 'Mr. Meeseeks',
    citation: 'Meeseeks and Destroy',
  }
];

// a random number is generated depending on the amount of quotes that we have
function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

// generate a random color by creating random RGB values & assign it to the document's body
// code snippet used from stack overflow. Source: https://stackoverflow.com/questions/51628092/random-rgb-color-generator-with-javascript
function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';

  document.body.style.background = rgb;
}

// create a function that holds the randomly generated quote and the variable to display the quotes' content
function printQuote() {
  let quote = getRandomQuote();
  getRandomColor();
  let htmlString = '';

  //build html message
  htmlString = '<p class="quote">' + quote.quote + '</p>';
  htmlString += '<p class="source">' + quote.source;
  // check if citation and year are present in quote properties
  if (quote.citation) {
    htmlString += '<span class="citation">' + quote.citation + '</span>';
  }
  if (quote.year) {
    htmlString += '<span class="year">' + quote.year + '</span>';
  }
  htmlString += '</p>';
  if (quote.tags) {
    htmlString += '<span class="tags">' + quote.tags + '</span>';
  }
  document.getElementById('quote-box').innerHTML = htmlString;
}

// event listener that calls the printQuote function when clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// set a delay on the page, after a certain amount of time has passed, display a new quote
window.setInterval(printQuote, 5000);
