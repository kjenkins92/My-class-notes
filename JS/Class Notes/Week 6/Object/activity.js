/////////////////////////////////////////////Object Activity/////////////////////
// Create an empty object called dog
const dog = {

}

// Print the the dog object on the console
console.log(dog)

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
const dog = {
  name: "Spot",
  legs: 4,
  color: "white",
  age: 2,
  bark: function() {
    console.log("Woof! Woof!");
  }
}

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name.legs.color.age.bark())
// or console.log(dog)

// Set new properties the dog object: breed, getDogInfo
dog.breed = "Poodle"
dog.getDogInfo = function() {
  console.log("Name: " +`${dog.name}`, + " Breed is " + `${dog.breed}`, + " Number of legs: " + `${dog.legs}`, + " Color is " + `${dog.color}` + " Age is " + `${dog.age}`, + `${dog.dog.bark()}`) 
}
console.log(dog.breed)
dog.getDogInfo()


// Count logged in users, count users having greater than equal to 50 points from the following object.

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
const loggedInUsers = Object.values(users).filter(user => user.loggedInUsers).length;
const highPoints = Object.values(users).filter(user => user.points >= 50).length; 
console.log("NUmber of logged in users: " + `${loggedInUsers}`);
console.log("More than fifty points: " + `${highPoints}`)

// Find the person who has many skills in the users object.
let mostSkilled = '';
let mostSkills = 0;
for (const user in users) {
  if (users[user].skills.length > mostSkills) {
    mostSkills = users[user].skills.length;
    mostSkilled = user;
  }
}
console.log("Person with most skills is " + `${mostSkiiled}` + " They have " + `${mostSkills}`)


// Find people who are MERN stack developer from the users object
let mernDevelopers = [];
for (const user in users) {
  if (users[user].skills.includes("MongoDB") &&
  (user[users].skills.includes("Express")) &&
  (user[users].skills.includes("React")) &&
  (user[users].skills.includes("Node"))
  ) {
    mernDevelopers.push(user)
  }
}

console.log("MERN developers are " + `${mernDevelopers}` )


// Set your name in the users object without modifying the original users object
const addUser = Object.assign({}, users , {
  myName: "Kaitlin",
  skills: [HTML, CSS, Javascript],
  age: 32,
  isLoggedIn: true,
  points: 30
})
console.log(addUser)

// Get all keys or properties of users object
const userKeys = Object.keys(users)
console.log(userKeys)

// Get all the values of users object
const userValues = Object.values(users)
console.log(userValues)

// Use the countries object to print a country name, capital, populations and languages.
const countries = {
  name: "Germany",
  capital: "Berlin",
  population: 84400000,
  language: "German"
}
console.log(countries)

// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: "Jane",
  lastName: "Doe",
  incomes: [{description: "Salary ", amount: 25000}, 
  {description: "Other ", amount: 5000}],
  expenses: [ {description: "Rent", amount: 1200}, 
    {description: "Utilities", amount: 300}
  ]
}
function totalIncome() {
  return this.incomes.reduce((sum, income) => sum + income.amount, 0);
}
function totalExpense() {
  return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
};
function accountInfo() {
  return `${this.firstName} ${this.lastName}'s Account`;
},
function addIncome(type, amount) {
  return this.incomes.push({type, amount});
}
function addExpense(type, amount) {
  return this.expenses.push({type, amount});
}
function accountBalance() {
  return this.totalIncome() - this.totalExpense();
}

function incomeList(type) {
  const categories = ['Salary', 'Other'];
  return categories[type - 1] || 'Unknown';
};
function expenseList(type) {
  const categories = ['Rent', 'Groceries'];
  return categories[type - 1] || 'Unknown';
}
// **** Questions:2, 3 and 4 are based on the following two arrays:users2 and products ()
    const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]



// Imagine you are getting the above users collection from a MongoDB database. 
    // a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(userName, email, password) {
const userExists = users2.find(user => user.username === username || user.email === email)
}
if (userExists) {
  console.log('User already exists.')
} else {
  const userNew = {
    _id: new Date().getTime().toString(),
    username: username,
    email: email,
    password: password,
    createdAt: new Date().toLocaleString(),
    isLoggedIn: false
  };
  users2.push(userNew);
  console.log('Sign up successful.', userNew);
}

    // b. Create a function called signIn which allows user to sign in to the application
function signIn(username, password) {
const user = users2.find(user => user.username === username);
if (user) {
  if (user.password ===password) {
    user.isLoggedIn = true;
    console.log("Sign in successful.")
  } else {
    console.log("Incorrect password.")
  }
} else {
  console.log("No user found.")
}
}

// The products array has three elements and each of them has six properties. 
    // a. Create a function called rateProduct which rates the product 
    // b. Create a function called averageRating which calculate the average rating of a product
    const product = [
      {
        id: 'eedfcf',
        name: 'tablet',
        description: 'Apple',
        price: 700,
        color: black,
        rating: []
      },
      {
        id: 'aegfal',
        name: 'Laptop',
        description: 'Mac',
        price: 2500,
        color: red,
        rating: []
      },
      {
        id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV: Procaster',
        price: 400,
        color: black,
        rating: []
      }
    ];
    
    function rateProduct(productId, userId, rating) {
      const product = products.find(product => product.id === productId);
      
      if (!product) {
        console.log('Not found.');
        return;
      }
    
      if (rating < 1 || rating > 5) {
        console.log('Rating should be between 1 and 5.');
        return;
      }
    
      product.ratings.push({ userId, rating });
      console.log(`Product ${product.name} rated successfully.`);
    }
    
    function averageRating(productId) {
      const product = products.find(product => product.id === productId);
    
      if (!product) {
        console.log('Product not found.');
        return;
      }
    
      if (product.ratings.length === 0) {
        console.log(`No ratings available for ${product.name}.`);
        return 0;
      }
    
      const total = product.ratings.reduce((sum, rating) => sum + rating.rating, 0);
      const average = total / product.ratings.length;
    
      console.log(`Average rating for ${product.name}: ${average.toFixed(1)}`);
        return average.toFixed(1);
      }
    


// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(productId, userId) {
  const product = products.find(product => product.id === productId);

  if (!product) {
    console.log('Product not found.');
    return;
  }

  if (!product.likes) {
    product.likes = [];
  }

  if (product.likes.includes(userId)) {
    product.likes = product.likes.filter(id => id !== userId);
    console.log(`User ${userId} removed their like from ${product.name}.`);
  } else {
    product.likes.push(userId);
    console.log(`User ${userId} liked ${product.name}.`);
  }
}

