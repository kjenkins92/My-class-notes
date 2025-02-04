// Write code to return the largest number in the given array

var maxNum = function(arr) {
    if (arr.length === 0){
        return null;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
};
