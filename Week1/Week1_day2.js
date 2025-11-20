// ----------------MAP----------------
//1. Опреация со строками, просто дублировать список и вывести в консоль
const birds = ["Parrot", "Falcon", "Owl"];
const birdCount =(bird)=> bird;
const birdNames = birds.map(birdCount)
console.log(birdNames)

//2. Операйия с числами деление
const numbers = [2, 4, 5]
const devide = (number) => number/2;
const result1 = numbers.map(devide)
console.log(result1)

//3. Проверка возраста и возврат прада или ложь
const ages = [18, 16, 20, 22];
const names = ['Alex', 'Susan', 'Ivan', 'Robert'];

const ageCheck = (age) => age>=18 ? "True" : "False";
const nameCHeck = (name) => name
const result2 = () => ages.map(ageCheck)+names.map(nameCHeck)

console.log(ages.map(ageCheck), names.map(nameCHeck))