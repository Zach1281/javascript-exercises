const sumAll = function(numStart, numEnd) {
    if((numStart < 0 || numEnd < 0) || !Number.isInteger(numStart) || !Number.isInteger(numEnd)){ return "ERROR";}
    if(numStart > numEnd){
        let swap = numStart;
        numStart = numEnd;
        numEnd = swap;
    }
    let sum = 0;
    for(let i = numStart; i <= numEnd; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
