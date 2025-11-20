// ==========================Начало работы с DOM эелементами======================

//1. Вывод содержимого в заголовке
const header = document.getElementById("main-title").textContent
console.log(header)

//2. Вывод содержимого в параграфе
const text_content = document.getElementsByClassName("description").innerText

console.log(text_content)

//3. Событие на кнопке
const btn = document.getElementById("change-text")
function changeText(){
    document.getElementById('main-title').textContent = 'Текст изменен';
    document.querySelector('p').style.color = 'red'
    
}
btn.onclick = changeText
