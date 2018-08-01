const app = function(){
    const url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
    makeRequest(url, requestComplete);

    const newQuote = document.querySelector('button');
    newQuote.addEventListener("click", handleOptionCLick);
}

const makeRequest = function(url, callbackFunction) {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", callbackFunction);
    request.send();
}

const requestComplete = function() {
    if (this.status !== 200) return;

    const quote = JSON.parse(this.response);
    showQuote(quote);
}

const showQuote = function(quote) {
    const quoteBox = document,querySelector('#quote-box');
    quoteBox.textContent = `${quote}`
}

const handleOptionCLick