const constants = [2.72, 3.14, 9.81, 37, 100]
/*
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']*/
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;


// Destructure and assign the elements of countries array to fin, est, sw, den, nor
/*
const [fin, est, sw, den, nor] = countries;*/



// Destructure the rectangle object by its properties or keys.

const {width, height, area, perimeter} = rectangle;



// Iterate through the users array and get all the keys of the objec  using destructuring
for (const user of users) {
const {name, scores, skills, age} = user;
console.log(`Keys: ${Object.keys(user).join(", ")}`)
}

// Find the persons who have less than two skills
const lessThanTwoSkills = users.filter(({ skills }) => skills.length < 2);

console.log(lessThanTwoSkills);
// Destructure the countries object print name, capital, population and languages of all countries
const countries = [
  {
    name: "Finland",
    capital: "Helsinki",
    population: 5530719,
    languages: ["Finnish", "Swedish"]
  },
  {
    name: "Estonia",
    capital: "Tallinn",
    population: 1326535,
    languages: ["Estonian"]
  },
  {
    name: "Sweden",
    capital: "Stockholm",
    population: 10415811,
    languages: ["Swedish"]
  },
  {
    name: "Denmark",
    capital: "Copenhagen",
    population: 5831404,
    languages: ["Danish"]
  },
  {
    name: "Norway",
    capital: "Oslo",
    population: 5421241,
    languages: ["Norwegian"]
  }
];

for (const { name, capital, population, languages } of countries) {
  console.log(`Country: ${name}`);
  console.log(`Capital: ${capital}`);
  console.log(`Population: ${population}`);
  console.log(`Languages: ${languages.join(", ")}`);
}


// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
    const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
    //David (4) ["HTM", "CSS", "JS", "React"] 90 95

    const [name, skills, [ , , jsScore, reactScore]] = student;
    
    console.log(name, skills, jsScore, reactScore);



// Write a function called convertArrayToObject which can convert the array to a structure object.
//     const students = [
//         ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//         ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
//       ]

//     console.log(convertArrayToObject(students))
//     [
//       {
//         name: 'David',
//         skills: ['HTM','CSS','JS','React'],
//         scores: [98,85,90,95]
//       },
//       {
//         name: 'John',
//         skills: ['HTM','CSS','JS','React'],
//         scores: [85, 80,85,80]
//       }
//     ]

function convertArrayToObject(students) {
  return students.map(([name, skills, scores]) => ({ name, skills, scores }));
}

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

console.log(convertArrayToObject(students));




// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
        // Add Bootstrap with level 8 to the front end skill sets
        // Add Express with level 9 to the back end skill sets
        // Add SQL with level 8 to the data base skill sets
        // Add SQL without level to the data science skill sets
        //     const student = {
        //       name: 'David',
        //       age: 25,
        //       skills: {
        //         frontEnd: [
        //           { skill: 'HTML', level: 10 },
        //           { skill: 'CSS', level: 8 },
        //           { skill: 'JS', level: 8 },
        //           { skill: 'React', level: 9 }
        //         ],
        //         backEnd: [
        //           { skill: 'Node',level: 7 },
        //           { skill: 'GraphQL', level: 8 },
        //         ],
        //         dataBase:[
        //           { skill: 'MongoDB', level: 7.5 },
        //         ],
        //         dataScience:['Python', 'R', 'D3.js']
        //       }
        //     }

    
        // The copied object output should look like this:

        //     {
        //     name: 'David',
        //     age: 25,
        //     skills: {
        //       frontEnd: [
        //         {skill: 'HTML',level: 10},
        //         {skill: 'CSS',level: 8},
        //         {skill: 'JS',level: 8},
        //         {skill: 'React',level: 9},
        //         {skill: 'BootStrap',level: 8}
        //       ],
        //       backEnd: [
        //         {skill: 'Node',level: 7},
        //         {skill: 'GraphQL',level: 8},
        //         {skill: 'Express',level: 9}
        //       ],
        //       dataBase: [
        //         { skill: 'MongoDB',level: 7.5},
        //         { skill: 'SQL',level: 8}
        //       ],
        //       dataScience: ['Python','R','D3.js','SQL']
        //     }
        //   }

        const student1= {
          name: 'David',
          age: 25,
          skills: {
              frontEnd: [
                  { skill: 'HTML', level: 10 },
                  { skill: 'CSS', level: 8 },
                  { skill: 'JS', level: 8 },
                  { skill: 'React', level: 9 }
              ],
              backEnd: [
                  { skill: 'Node', level: 7 },
                  { skill: 'GraphQL', level: 8 },
              ],
              dataBase: [
                  { skill: 'MongoDB', level: 7.5 },
              ],
              dataScience: ['Python', 'R', 'D3.js']
          }
      };

      const newStudent = structuredClone(student1);

newStudent.skills.frontEnd.push({ skill: 'BootStrap', level: 8 });
newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
newStudent.skills.dataScience.push('SQL');

console.log(newStudent);