  const newQuote = () => {
    const n = 30;
    const rand = num => {
            return Math.floor(Math.random() * num);
          };
    const decodeHtml = (html)=>{
            var txt = document.createElement("textarea");
            txt.innerHTML = html;
            return txt.value;
          };
    const random = rand(n);   
    
    fetch(`https://cors-anywhere.herokuapp.com/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${n}`)
      .then(function(response) { return response.json();})
      .then(function(json) {
        var content = json[random].content.replace(/<[^>]*>?/gm, ""),
          title = json[random].title,
          linkBase = "https://twitter.com/intent/tweet?text=";
        var quote =decodeHtml(content);
        var tweetLink = `${linkBase}${quote} -- ${title}`,
          tweetEl = document.getElementsByClassName("twitter-share-button")[0];
        tweetEl.setAttribute("href", tweetLink);
        tweetEl.setAttribute("target", "_blank");
        document.getElementById("quote").innerHTML = content;
        document.getElementById("author").innerHTML = title;
      });
    var newQuoteButton = document.getElementById("new");
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