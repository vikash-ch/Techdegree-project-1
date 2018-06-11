//by Vikash Chand


//Database of quotes

var quotes = [
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    source: "Confucious",

  },

  {
    quote: "Well done is better than well said",
    source: "Benjamin Franklin",
  },

  {
    quote: "Keep your eyes on the stars, and your feet on the ground",
    source: "Theodore Roosevelt",
    citation: "Address at the prize day exercises at Groton School",
    year: 1904

  },

  {
    quote: "Death is not the ultimate tragedy in life. The ultimate tragedy is to die without discovering the possibilities of full growth.",
    source: "Norman Cousins",
    citation: "Good Housekeeping",
    year: 1989

  },

  {
    quote: "Whoever is careless with the truth in small matters cannot be trusted with important matters.",
    source: "Albert Einstein",
    citation: "Albert Einstein: Historical and Cultural Perspectives",
    year: 1955

  },

]


// Select random quote from database
function getRandomQuote () {
    var randomNumber =  Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
    }

// Print selected quote onto the browwer
function printQuote() {
  var selectedQuote = getRandomQuote()
    var quoteString = "<p class = 'quote'>" + selectedQuote.quote + "</p>";
     quoteString += "<p class = 'source'>" + selectedQuote.source + "</p>";
     if (selectedQuote.citation != undefined ) {
       quoteString += "<span class='citation'>" + selectedQuote.citation + "</span>";
    }
     if (selectedQuote.year != undefined) {
       quoteString += "<span class ='year'>" + selectedQuote.year +"</span>";
     }

     document.getElementById('quote-box').innerHTML = quoteString;

     // change color per click
     function rdmColorNumber() {
       return Math.floor(Math.random() * 255)
      }

     var colorString = "rgb(" + rdmColorNumber() + "," + rdmColorNumber() + "," + rdmColorNumber() + ")";
     document.body.style.background = String(colorString);
    }


var intervalID = window.setInterval(printQuote, 5000);


getRandomQuote();
printQuote ();

  // event listener to respond to "Show another quote" button clicks
  // when user clicks anywhere on the button, the "printQuote" function is called
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);
