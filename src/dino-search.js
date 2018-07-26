const json = require("./obj.json");

const filterDinos = url => {
    var search = url.split("=")[1];
    var searchLen = search.length;
    //console.log(json);
    //console.log(search);
    var suggestionArr = [];
    var suggestionResult = [];
    //26 = letters of alphabets which are keys in the json object of dinosaur names
    var keys = Object.keys(json);
    //console.log(keys);
    for (var i = 0; i <= keys.length; i++) {
        if (search[0] === keys[i]) {
            //console.log(keys[i] + "yey");
            //console.log(json[keys[i]]);
            suggestionArr = json[keys[i]];
            for (var j = 0; j < suggestionArr.length; j++) {
                suggestionResult.push(suggestionArr[j].name);
            }
        }
    }
    console.log(suggestionResult);
    return suggestionResult;
};

module.exports = filterDinos;
