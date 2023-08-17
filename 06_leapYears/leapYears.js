const leapYears = function(year) {
    if(year < 0 || !Number.isInteger(year)){return "ERROR";}
    // a leap year is any year that is divisible by four
    // by default most years are not leap years
    // any year that is divisible by 100 is not a leap year unless it is divisible by 400 then it is one
    
    if(year % 100 === 0){
        if(year % 400 === 0){
            return true;
        }
        return false;
    }

    if(year % 4 === 0){return true;}
    return false;
};

// Do not edit below this line
module.exports = leapYears;
