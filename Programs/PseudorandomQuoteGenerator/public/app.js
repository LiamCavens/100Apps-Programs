const app = function(){
    const url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
    makeRequest(url, requestComplete);

    const newQuote = document.querySelector('button');
    newQuote.addEventListener("click", handleOptionCLick);
}

const makeRequest = function(url, callbackFunction) {
    const 
}