const removeFromArray = function(array, ...args) {
    return array.filter((arrayElements) => !args.includes(arrayElements));
};

// Do not edit below this line
module.exports = removeFromArray;
