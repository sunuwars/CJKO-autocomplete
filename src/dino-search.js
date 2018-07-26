const json = require("./obj.json");

const filterDinos = url => {
    var search = url.split("=")[1];
    if (search.length === 0) {
        return ["Type something!"];
    }
    var suggestionArr = [];
    var suggestionResult = [];
    var keys = Object.keys(json);
    // search json for object of dinos based on 1st letter
    for (var i = 0; i <= keys.length; i++) {
        if (search[0] === keys[i]) {
            suggestionArr = json[keys[i]];
            // console.log(suggestionArr);
            for (var j = 0; j < suggestionArr.length; j++) {
                var letterSlice = suggestionArr[j].name.slice(1, search.length);
                if (letterSlice === search.slice(1, search.length)) {
                    suggestionResult.push(suggestionArr[j].name);
                }
            }
        }
    }
    return suggestionResult.slice(0, 10);
};

module.exports = filterDinos;
