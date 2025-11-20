// const products = [
//     {name:"books", price: 100, category: "fantasy"},
//     {name:"books", price: 200, category: "detective"},
//     {name:"audio-books", price: 250, category: "music"},
//     {name:"books", price: 150, category: "science"},
    
// ]

// const result_name = products
// .filter(product => product.category === "fantasy")
// .map(product => product.name);

// ============================================================

const users = [
    { name: "Alice", age: 22, isAdmin: false },
    { name: "Bob", age: 30, isAdmin: true },
    { name: "Charlie", age: 17, isAdmin: false },
    { name: "Diana", age: 25, isAdmin: true },
  ];

// Фильтр имен по isAdmin
const admin_filter = users
.filter(admin => admin.isAdmin === true)
.map(admin => admin.name)

// Фильтр по возрасту
const adult_filter = users
.filter(adult => adult.age >=18)
.map(adult => adult.name)

// Вывод среднего возраста
let age_list = [];
const age_filter = users.map(age => age_list.push(age.age));
const avarage_ages = age_list.reduce((accumulator, current) => accumulator+current, 0) / age_list.length;
console.log(avarage_ages)

// Вывод списка имен
const name_age = users.map((name) => `${name.name}:(${name.age})\n`)

// ====================================================================
//1 📌 Выведи имена студентов, у которых по всем предметам оценка выше 60.
//2 📌 Выведи студентов, у которых хотя бы один предмет с оценкой менее 50.
//3 📌 Реализуй функцию getAverageGrade(student) — должна возвращать средний балл по всем предметам.
//4 📌 Выведи имя студента с наивысшим средним баллом.
// 📌 Используй forEach, some, every, find, map, reduce — по ситуации.

const students = [
    { name: "Alex",
      age: 20,
      courses: [{title: "Math", grade: 90},{title: "Biology", grade: 75}]
    },
    { name: "Elena",
      age: 23,
      courses: [{ title: "Math", grade: 50 }, {title: "Biology", grade: 45}]
    },
    { name: "Ivan",
      age: 19,
      courses: [{title: "Math", grade: 100},{title: "Biology", grade: 95}]
    }
  ];

// 1. Выведи имена студентов, у которых по всем предметам оценка выше 60.
const passedCourses = students
.filter(student => student.courses.every(cource => cource.grade > 60))
.map(student => student.name)

console.log(passedCourses)

// 2. Выведи студентов, у которых хотя бы один предмет с оценкой менее 50.
const lessGrade = students
.filter(student => student.courses.find(cource => cource.grade < 50))
.map(student => student.name)

console.log(lessGrade)

//3. Реализуй функцию getAverageGrade(student) — должна возвращать средний балл по всем предметам.
function getAverageGrade(student) {
    const grades = student.courses.map(course => course.grade);
    const total = grades.reduce((acc, curr) => acc + curr, 0);
    return total / grades.length;
};

students.forEach(student => {
    const avg = getAverageGrade(student);
    console.log(`${student.name} — average grade: ${avg}`);
});

