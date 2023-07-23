//Задание 5.
//Перепишите консольное приложение из предыдущего юнита на классы.
//Общие требования:
//Имена классов, свойств и методов должны быть информативными.
//Соблюдайте best practices.
//Используйте синтаксис ES6.

class Device {
    constructor (name) {
      this.name = name;
      this.place = 'kitchen';
    }
}
  
class Machine extends Device {
    constructor (name, power, plugIn, place) {
      super (place);
      this.name = name;
      this.power = power;
      this.plugIn == 0 ? 'turn of' : 'turn on';
    }
    getInfo() {
       if (this.plugIn == 0) {
           return `${this.name} has power ${this.power} and turn of`
       } else {
          return `${this.name} has power ${this.power} and turn on`
       }
    }
}
  
const CoffeeMaker = new Machine('Coffee Maker', 600, 1);
console.log (CoffeeMaker.getInfo());

const Kettle = new Machine('Kettle', 1000, 0);
console.log (Kettle.getInfo());