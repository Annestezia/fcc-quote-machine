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


    // You can access that like this:

    // fetch('https://api.github.com/gists/53e1780a5a68fe9281cfbbc9820d381f')
    //   .then(results => {
    //     return results.json();
    //   })
    //   .then(data => {
    //     console.log(data.files["forgeLikeServerSetup.md"].content);
    //   });


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
        // console.error('Error:', err);
      });
    // const newQuoteButton = document.getElementById("new");
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