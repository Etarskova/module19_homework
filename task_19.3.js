//Задание 3.
//Напишите функцию, которая создает пустой объект, но без прототипа.

function c(obj) {
    let objNew = {};
    return obj = objNew;
}

let object = c('obj')
console.log((object));