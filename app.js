window.onload = function(){
  var searchBtn = document.getElementById("search");
  
  searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    var httpRequest = new XMLHttpRequest();
    var query = document.querySelector("input");
    var input = query.value;
    var valid = false;

    if (!isValidInput(input.trim())) {
      valid = false;
      alert("Incorrect format for text. Only letters and spaces allowed.");
    }

    function isValidInput(input) {
      var regex = /^([a-zA-Z\s-'])*$/;
      //var regex = /^[\w\s-']+$/;
      if(regex.test(input)){
        return true
      }
    }

    var url = "superheroes.php?query="+input;
    httpRequest.onreadystatechange = searchForHero;
    httpRequest.open('GET', url);
    httpRequest.send();


    function searchForHero(){
      if(isValidInput(input)==true){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            var result = document.getElementById("result");
            result.innerHTML = response;
          } 
          else {
            alert('There was a problem with the request.');
        }
       }
      } 
    }
  });
}

 
  