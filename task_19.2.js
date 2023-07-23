//Задание 2.
//Напишите функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const obj = {
    type: 'book',
    name: "Cyanide",
    author: "Christina Stark",
    date: 2022
}

function b(str, obj) {
    console.log(str in obj);
}
  
b('author', obj);