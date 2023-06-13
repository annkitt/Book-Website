var quotes =[
    'Life is a journey that must be traveled no matter how bad the roads and accommodations. - Oliver Goldsmith',
    'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson' ,
    "Twenty years from now, you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. - Mark Twain " ,                                                       
    "Life is not about waiting for the storm to pass, but about learning to dance in the rain. - Vivian Greene",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Life is 10% what happens to us and 90% how we react to it.  - Charles R. Swindoll"
]

function newQuote(){
    var randomNumber= Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML= quotes[randomNumber];
}

