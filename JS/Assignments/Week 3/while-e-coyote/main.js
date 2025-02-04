function numberDoubler(num) {
    while (num < 100) {
        num *= 2;
    }
    return num;
}
console.log(numberDoubler(4))


function stringRepeater(str) {
    while (str.length < 10) {
      str += str;
    }
    return str;
  }
console.log(stringRepeater("hello"))


function makeDivisible(x, y) {
    while (x % y !== 0) {
        x++;
    }
    return x;
}
console.log(makeDivisible(6, 8))
module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};