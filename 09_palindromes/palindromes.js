const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace(/[^a-zA-Z0-9]+/g, '');
    let split = string.split("");
    let reverse = split.reverse();
    let join = reverse.join("");
    if(string === join)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;
