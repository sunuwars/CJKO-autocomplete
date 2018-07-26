var input = document.getElementById("input");
var listContainer = document.getElementById("list-container");

function requestData(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 200) {
        data = JSON.parse(xhr.responseText);
        cb(data)
        return data;
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

input.addEventListener("keyup", function() {
    var userInput = document.getElementById("input").value;
    requestData("/autocomplete/?search=" + userInput, populate)
});

function populate(data){
    clearList();
    var list = document.createElement("ul");
    listContainer.appendChild(list);
    for (var i = 0; i < 10; i++) {
        var listItem = document.createElement("li");
        list.appendChild(listItem);
        var listItemContent = document.createTextNode(data[i]);
        listItem.appendChild(listItemContent);
    }
}
// add function that adds classes to list so we can style them :)
function clearList() {
    while(listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
    }
}
