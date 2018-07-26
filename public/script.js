var input = document.getElementById("input");

input.addEventListener("keyup", function() {
  var userInput = document.getElementById("input").value;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      console.log(data);
      return data;
    }
  };
  xhr.open("GET", "/autocomplete/?search=" + userInput, true);
  //console.log("/autocomplete/?search=" + userInput)
  xhr.send();
});
var results;
