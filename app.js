window.onload = function(){
  var SearchBtn = document.getElementById("search");

  SearchBtn.addEventListener("click", function(event){
    var httpRequest = new XMLHttpRequest();
    var url = "superheroes.php";
    httpRequest.onreadystatechange = loadAlert;
    httpRequest.open('GET', url);
    httpRequest.send();
    //event.preventDefault();
    //console.log("button clicked");
    //var httpRequest = new XMLHttpRequest();
    //var url = "superheroes.php";
    //httpRequest.open('GET', url);
    //httpRequest.onreadystatechange = loadQuote;
    //httpRequest.send();

    function loadAlert() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          var response = httpRequest.responseText;
          alert(response);
        //var quote = document.getElementById("quote");
        //quote.innerHTML = response;
        } 
        else {
          alert('There was a problem with the request.');
        }
      } 
    }
  });
}

 
  