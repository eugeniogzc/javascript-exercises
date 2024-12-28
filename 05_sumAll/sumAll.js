const sumAll = function(first, last) {
    let sum = 0;
    let middleMan = 0;

    if (first > last) {
        middleMan = first;
        first = last;
        last = middleMan;
    }

    if (first < 0) return "ERROR";
    if (!Number.isInteger(first) || !Number.isInteger(last)) return "ERROR"
    
    for (;first < last+1; first++) sum += first;

    return sum
};

// Do not edit below this line
module.exports = sumAll;
