const reverseString = function(str) {
    let myArr = str.split("")

    let result = [];
    for (let i = myArr.length-1; i >= 0; i--) {
        result.push(myArr[i]);
    }

    return result.join("")
};

// Do not edit below this line
module.exports = reverseString;
