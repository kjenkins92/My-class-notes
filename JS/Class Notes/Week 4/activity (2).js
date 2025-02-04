// Declare an empty array;
let array1 = []

// Declare an array with more than 5 number of elements
let array2 = ["one", "two", "three", "four", "five"]

// Find the length of your array
console.log(array2.length)

// Get the first item, the middle item and the last item of the array
console.log(array[0, 2, 4])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [true, 1, "string", undefined, null, false, "word"]
console.log(mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook" , "Google" , "Microsoft" , "Apple", "IBM" , "Oracle" , "Amazon"]

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies[0, 3, 6])

// Print out each company
console.log(itCompanies)

// Change each company name to uppercase one by one and print them out
console.log(itCompanies.toUpperCase())

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies} are big IT companies`)

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = "Amazon"
if (itCompanies.includes(company)){
    console.log(company)
}else {
    console.log(`${company} not found`)
}

// Filter out companies which have more than one 'o' without the filter method
console

// Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies.sort())

// Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 2))

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(4, 6))
// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3))

// Remove the first IT company from the array
console.log(itCompanies.splice(0, 1))

// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(3, 1))

// Remove the last IT company from the array
console.log(itCompanies.splice(6, 1))

// Remove all IT companies
console.log(itCompanies.splice(0 , 6))

// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
import { main } from './main.js';
console.log(main)

// First remove all the punctuations and change the string to array and count the number of words in the array

    // let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    // console.log(words)
    // console.log(words.length)
    
    // ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
    // // 13
    let arrayOne = ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
    console.log(arrayOne.length)
    
// In the following shopping cart add, remove, edit items

     const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    // add 'Meat' in the beginning of your shopping cart if it has not been already added
    // add Sugar at the end of you shopping cart if it has not been already added
    // remove 'Honey' if you are allergic to honey
    // modify Tea to 'Green Tea'
if (shoppingCart.includes("Meat")) {
    shoppingCart.unshift("Meat")
}
if (shoppingCart.includes("Sugar")){
    shoppingCart.push("Sugar")
}

let allergic = "Honey"
if (allergic && shoppingCart.includes("Honey")){
    let allergyHoney = shoppingcart.indexOf("Honey");
    shoppingCart.splice(allergyHoney, 1)
}

let tea1 = shoppingCart.index("Tea")
if (tea1 !== -1) {
shoppingCart[tea1] = "Green Tea"
}
console.log(shoppingCart)
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes("Ethiopia")){
    console.log("ETHIOPIA")
}
else {
    countries.push("Ethiopia");
    console.log(countries)
}
// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes("Sass")) {
    console.log("Sass is a CSS preprocess")
}
else {
    webTechs.push("Sass");
    console.log(webTechs)
}
// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backend)
console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// Exercise: Level 3
// The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
ages.sort((a, b) => a - b);
console.log("sorted ages", ages)
const minAge = Math.min(ages);
const maxAge = Math.max(ages);
console.log("Min age", minAge);
console.log("Max age", maxAge);
// Find the median age(one middle item or two middle items divided by two)
const length = ages.length;
let median;
if (length % 2 == 0){
    const middle1 = ages[length / 2 - 1];
    const middle2 = ages[length / 2];
    median = (middle1 + middle2) / 2;
} else{
    median = ages[Math.floor(length / 2)];
}
console.log("Median age", median)
// Find the average age(all items divided by number of items)
const sum = ages.reduce((total, age) => total + age, 0);
const averageAge = sum / ages.length;
console.log("Average age", averageAge)
// Find the range of the ages(max minus min)
const range = maxAge - minAge;
console.log("Range", range)
// Compare the value of (min - average) and (max - average), use abs() method 
const minDifference = Math.abs(minAge - averageAge);
const maxDifference = Math.abs(maxAge - averageAge);
if (minDifference > maxDifference) {
    console.log("(min - average) is larger than (max - average).");
  } else if (maxDifference > minDifference) {
    console.log("(max - average) is larger than (min - average).");
  } else {
    console.log("Both (min - average) and (max - average) are equal.");
  }
// 1.Slice the first ten countries from the countries array
const firstTenCountries = countries.slice(0, 10);

console.log("First 10 countries", firstTenCountries);
// Find the middle country(ies) in the countries array
const length1 = countries.length;

if (length % 2 === 1) {
  middleCountries = countries[Math.floor(length1 / 2)];
} else {

  middleCountries = [
    countries[length1 / 2 - 1],
    countries[length1 / 2]
  ];
}
console.log("Middle countries", middleCountries);
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const middleIndex = Math.ceil(countries.length / 2);
const firstHalf = countries.slice(0, middleIndex);
const secondHalf = countries.slice(middleIndex);

console.log("First half", firstHalf);
console.log("Second half", secondHalf);