/******************
 * YOUR CODE HERE *
 ******************/
function xify(str) {
  return 'x'.repeat(str.length);
}
console.log(xify("hello"));


function yellingChars(str) {
  return str.split("").join("!") + "!";
}
console.log(yellingChars("hello"));


function indexedChars(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
      result += `${i}${str[i]}`;
  }
  return result;
}
console.log(indexedChars("hello"))


function numberedChars(str) {
  let result = "";
    for (let i = 0; i < str.length; i++) {
        result += `(${i + 1})${str[i]}`;
    }
    return result;
}
console.log(numberedChars("hello"));


function exclaim(sentence) {
  return sentence.replace(/[?.]/g, '!'); 
}
console.log(exclaim("hello"))


function repeatIt(str, n) {
  return str.repeat(n);
}
console.log(repeatIt("hello", 3))


function truncate(str) {
  if (str.length > 15) {
    return str.slice(0, 15) + '...';
  }
  return str;
}
console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves."))

function ciEmailify(name) {
  const [firstName, lastName] = name.toLowerCase().split(' ');
  return `${firstName}.${lastName}@codeimmersives.com`;
}
console.log(ciEmailify("Kaitlin Jenkins"));


function reverse(str) {
  return str.split('').reverse().join('');
}
console.log(reverse("hello"));


function onlyVowels(str) {
  return str.split('').filter(char => 'aeiouAEIOU'.includes(char)).join('');
}
console.log(onlyVowels("hello"))
 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
