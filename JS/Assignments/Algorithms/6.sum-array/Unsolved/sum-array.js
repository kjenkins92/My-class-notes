// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    return arr.reduce((total, current) => total + current, 0);
};

