const repeatString = function(str, num) {
    let phrase = "";
    if (num < 0) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        phrase = phrase + str;
    }

    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
