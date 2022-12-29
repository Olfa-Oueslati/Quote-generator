const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('auhtor')
const twitterBtn = document.getElementById('twitter')
const newQuoteBnt = document.getElementById('new-quote')
//const loader = document.getElementById('loader')

// Show new quote
function newQuote(){
    //pick a random quote from apiQuotes array
    const quote=apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //kol mara wahda Math.floor(Math.random()
    // pour tester console.log(quote)
    // check if author field is blank replace it with 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    }else
         { authorText.textContent = quote.author;
        }

   // check quote lentgh to determinate styling
   if (quote.text.length >120 ){
    quoteText.classList.add('long-quote');
   }else{
    quoteText.classList.remove('long-quote');
   }
    quoteText.textContent = quote.text;
}

//Get Quotes From API
let apiQuotes = [];


async function getQuotes(){
   const apiUrl= 'https://type.fit/api/quotes' ;
   try{
    const response = await fetch (apiUrl);
    apiQuotes = await response.json();
   // console.log(apiQuotes[12]);
       newQuote()
   } catch(error){
       // Catch Error Here

   }
}
//tweet Quote
function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}
// Event Listeners
newQuoteBnt.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);

// On load
getQuotes();

