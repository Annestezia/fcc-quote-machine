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

    fetch(`https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e4b495e4f62a650fb0db0405c20fa4f48cb75a0e/quotes.json`)
      .then(res=> res.json())
      .then((json) =>{
      const {quote,author}=json.quotes[random];
      const linkBase = "https://twitter.com/intent/tweet?text=",      
           tweetEl = document.getElementsByClassName("twitter-share-button")[0];
           const escaped=encodeURI(quote);
      const tweetLink = `${linkBase}${escaped} -- ${author}`;
        tweetEl.setAttribute("href", tweetLink);
        tweetEl.setAttribute("target", "_blank");
        document.getElementById("text").innerHTML = quote;
        document.getElementById("author").innerHTML = author;

      }).catch((err) => {
        console.log(err);
      });
  };

  newQuote();   