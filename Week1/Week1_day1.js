// ------------------СТРЕЛОЧНЫЕ ФУНКЦИИ И ИХ ИСПОЛЬЗОВАНИЕ\НАПИСАНИЕ--------------------------

const elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"]; // Коллекция элементов для функции

let function1 = elements.map((element) => element.length); // Стрелочная функция самая читабельная (понятно что написано)
console.log(function1); // Вывод функции

// -------------------------------THIS in Functions-----------------------------------------

// function Person() {
//   this.age = 0;
// }
// let p = new Person();
// console.log(p);

// // ===========================================================================

// let enter = prompt("Enter your age:")

// let CheckAge =()=> {if (enter>=18) {return "ok"} else{return "Enter prohibited"}}

// console.log(CheckAge())