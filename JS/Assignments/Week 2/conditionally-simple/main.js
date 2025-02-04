/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong(inputString) {
  if (inputString.length > 20){
  return "That's a long string!"
  }
}
 function isItMedium(inputString) {
  if (inputString.length >= 10 && inputString.length <= 20) {
    return "That's a regular sized string!"
  }
 }
function isItShort(inputString) {
  if (inputString.length < 10){
    return "That's a small string!"
  }else {
    return "That's not a small string!"
  }
}
function howLongIsMyString(inputString) {
  const length = inputString.length;
  if (length > 20) {
    return "That's a long string!"
  } 
  else if (length >= 10 && length <= 20){
    return "That's a regular sized string!"
  } else {
    return "That's a small string!"
  }
}
function personsHeight(personName) {
  if (personName === "Shaq") {
      return 85;
  } else if (personName === "Zooey") {
      return 65;
  } else {
      return "I don't know everyone's height!";
  }
}

/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof personsHeight === 'undefined') {
  personsHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  personsHeight,
}