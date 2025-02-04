// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

console.log(vowelCount("programmer"));
console.log(vowelCount("I think, therefore I am"));
console.log(vowelCount(""))
