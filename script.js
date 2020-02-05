window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});
const newQuote = () => {
    const n = 50;
    const rand = num => {
            return Math.floor(Math.random() * num);
          };
    const random = rand(n); 
    
    fetch(`https://cors-anywhere.herokuapp.com/https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e4b495e4f62a650fb0db0405c20fa4f48cb75a0e/quotes.json`)
      .then(function(response) { return response.json();})
      .then(function(json) {
      let {quote,author}=json.quotes[random];      
      const linkBase = "https://twitter.com/intent/tweet?text=",      
           tweetEl = document.getElementsByClassName("twitter-share-button")[0];
           let escaped=encodeURI(quote);
      let tweetLink = `${linkBase}${escaped} -- ${author}`;
        tweetEl.setAttribute("href", tweetLink);
        tweetEl.setAttribute("target", "_blank");
        document.getElementById("quote").innerHTML = quote;
        document.getElementById("author").innerHTML = author;
      });
    const newQuoteButton = document.getElementById("new");
  };

  newQuote();   

//oldschool  version =)) 

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     document.getElementById("quote").innerHTML = JSON.parse(
//       this.responseText
//     )[random].content;
//     document.getElementById("author").innerHTML = JSON.parse(
//       this.responseText
//     )[random].title;
//   }
// };
// xhttp.open(
//   "GET",
//   `https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${n}`,
//   true
// );
// xhttp.send();