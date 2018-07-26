var input = document.getElementById("input");

function requestData(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200) {
        data = JSON.parse(xhr.responseText);
        console.log(data,);
        cb(data)
        return data;
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

input.addEventListener("keyup", function() {
    var userInput = document.getElementById("input").value;
    requestData("/autocomplete/?search=" + userInput, logger)
});

function logger(data){
    console.log("working", data)
    
}