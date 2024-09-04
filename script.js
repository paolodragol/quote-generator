const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
    quoteContainer.hidden = false;
    loader.hidden = true;  
}


// Show new quote
function newQuote() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
   
    // Check if author field is null, replace it with 'Unknown'
    if(!quote.author){
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    
    // Check quote length to determine the styling
    if(quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    removeLoadingSpinner();
}

// Get quotes from API

// let apiQuotes = [];

// async function getQuotes() {
//     showLoadingSpinner();
//     const apiUrl = '';

//     try {
//         // const response = await fetch(apiUrl);
//         // apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }



// Tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blanck');
}


// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);



// On load
newQuote();