// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
        this.name = name,
        this.age = age,
        this.color = color,
        this.legs = legs;
    } 
animalDiscription() {
    let info =  `The name is ${this.name}, its age is ${this.age}, its color is ${this.color}, and it has ${this.legs} legs.`;
    console.log(info)
} 
pet() {
    let info2 =  `This animal can be a pet.`;
    console.log(info2)
}
}

const animalOne = new Animal ("Spot", 3, "Brown", "4");
animalOne.animalDiscription()
animalOne.pet()

// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs),
        this.breed = breed

    }
    bark() {
        console.log("The dog " + `${this.name}` + " barks.")
    }
   /* animalDescription() {
        console.log(`This dog is a ${this.breed} named ${this.name}. It is ${this.age} years old, has ${this.color} fur, and ${this.legs} legs.`);
    }*/ //OVERRIDE Method
}

const dog1 = new Dog("Charlie", 4, "yellow", 4, "lab")
dog1.bark()
console.log(dog1)
// OVERRIDE METHOD dog1.animalDescription()



class Cat extends Animal {
constructor(name, age, color, legs, personality) {
    super(name, age, color, legs),
    this.personality = personality
}
meow() {
    console.log(`The cat ${this.name} meows.`)
}
}
const cat2 = new Cat("Sophia","", "", "", "friendly")
console.log(cat2.meow())
console.log(cat2)


// Override the method you create in Animal class
// Parent Class: Animal


// Let's try toS develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
class Statistics {
    constructor(data) {
        this.data = data.sort((a, b) => a - b); // Sorting the data for calculations
    }

    // Count: Total number of elements
    count() {
        return this.data.length;
    }

    // Sum of elements
    sum() {
        return this.data.reduce((acc, val) => acc + val, 0);
    }

    // Mean (Average)
    mean() {
        return this.sum() / this.count();
    }

    // Median
    median() {
        let n = this.count();
        let mid = Math.floor(n / 2);
        return n % 2 === 0 ? (this.data[mid - 1] + this.data[mid]) / 2 : this.data[mid];
    }

    // Mode (Most frequent value)
    mode() {
        let freqMap = {};
        this.data.forEach(num => freqMap[num] = (freqMap[num] || 0) + 1);
        let maxFreq = Math.max(...Object.values(freqMap));
        let modes = Object.keys(freqMap).filter(key => freqMap[key] === maxFreq).map(Number);
        return { mode: modes, frequency: maxFreq };
    }

    // Range (Max - Min)
    range() {
        return Math.max(...this.data) - Math.min(...this.data);
    }

    // Variance
    variance() {
        let mean = this.mean();
        let squaredDiffs = this.data.map(num => Math.pow(num - mean, 2));
        return squaredDiffs.reduce((acc, val) => acc + val, 0) / this.count();
    }

    // Standard Deviation
    standardDeviation() {
        return Math.sqrt(this.variance());
    }

    // Min Value
    min() {
        return Math.min(...this.data);
    }

    // Max Value
    max() {
        return Math.max(...this.data);
    }

    // Percentile Calculation
    percentile(p) {
        let index = Math.floor((p / 100) * this.count());
        return this.data[index];
    }

    // Frequency Distribution
    frequencyDistribution() {
        let freqMap = {};
        this.data.forEach(num => freqMap[num] = (freqMap[num] || 0) + 1);
        return Object.entries(freqMap).map(([key, value]) => ({ value: Number(key), frequency: value }));
    }
}

// Example Usage
const sampleData = [3, 6, 2, 7, 3, 8, 3, 6, 10, 2, 2, 6, 6, 8, 2, 9, 5, 7, 2, 3, 6] 
const stats = new Statistics(sampleData);

console.log("Count:", stats.count());
console.log("Sum:", stats.sum());
console.log("Mean:", stats.mean());
console.log("Median:", stats.median());
console.log("Mode:", stats.mode());
console.log("Range:", stats.range());
console.log("Variance:", stats.variance());
console.log("Standard Deviation:", stats.standardDeviation());
console.log("Min:", stats.min());
console.log("Max:", stats.max());
console.log("25th Percentile:", stats.percentile(25));
console.log("50th Percentile:", stats.percentile(50)); // Median
console.log("75th Percentile:", stats.percentile(75));
console.log("Frequency Distribution:", stats.frequencyDistribution());

// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
    constructor(firstName, lastName, incomes = [], expenses = [], properties = []){
        this.firstName = firstName,
        this.lastName = lastName,
        this.incomes = incomes,
        this.expenses = expenses,
        this.properties = properties;
    }
totalIncome() {
    return this.incomes.reduce((acc, income) => acc + income, 0)
} 
totalExpenses() {
    return this.expenses.reduce((acc, expense) => acc + expense, 0)
}
accountInfo() {
    console.log( 
   `Name: ${this.firstName} ${this.lastName}
    Total Income: $${this.totalIncome()}
    Total Expense: $${this.totalExpenses()}
    Properties: ${this.properties.length > 0 ? this.properties.join(", ") : "None"}`)
}
addIncome(income) {
    if (typeof income === "number" && income > 0) {
        this.incomes.push(income) 
    } else {
        console.log("Invaild income")
    }
}
addExpenses(expense) {
    if (typeof expense === "number" && expense > 0) {
       this.expenses.push(expense)
    } else {
    console.log("Invalid expense")
    }
} 
accountBalance() {
    const balance = this.totalIncome() - this.totalExpenses();
    return balance;
}
}




let person1 = new PersonAccount("John", "Doe", [2000, 500], [600, 300], ["house", "car"]);
console.log("Total Income: ", person1.totalIncome())
console.log("Total Expense: ", person1.totalExpenses())
person1.addIncome(500)
person1.addExpenses(1000)
console.log("Account Balance: " , person1.accountBalance())
console.log(person1.accountInfo())