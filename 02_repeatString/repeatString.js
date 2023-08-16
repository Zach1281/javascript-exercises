const repeatString = function(string, times2Repeat) {
    if(times2Repeat < 0){return "ERROR";}
    let repeatedString = "";
    for(let i = 0; i < times2Repeat; i++){
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
