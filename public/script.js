var input = document.getElementById("input");

function jsonCall(userInput, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            console.log(data);
            return callback(data);
        }
    };
    xhr.open("GET", "/autocomplete/?search=" + userInput, true);
    //console.log("/autocomplete/?search=" + userInput)
    xhr.send();
}

input.addEventListener("input", function() {
    var userInput = document.getElementById("input").value;
    jsonCall(userInput, function(data) {
        console.log(data);
    });
});
