
class Car { 

    static description = 'Класс описывающий автомобиль';
    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj)
    }

    #test = 'test';

    // constructor - это метод класса
    constructor({brand, model, price} = {}) {
        // console.log('Выполняеться constructor')
        // console.log('this:', this)

        this.brand = brand;
        this._model = model;
        this.price = price;
    }

    //  это метод класса
    changePrice(newPrice) {
        this.price = newPrice;

        console.log(this.#test)
    }

    get model() {
        return this._model;
    }

    set model(newModel) {
        this._model = newModel;
    }

    // это метод класса
    // setModel(newModel) {
    //     this.model = newModel;
    // }

    // getModel() {
    //     return this.model;
    // }
};
// console.dir(Car)
// console.log(Car.description)

Car.description = 'Класс описывающий автомобиль';
Car.logInfo = function(carObj) {
    console.log('Car.logInfo -> carObj', carObj)
}

const carInstance = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});
// console.log(carInstance)

// console.log(Object.getPrototypeOf(carInstance)) // constructor: class Car
// console.log(Object.getPrototypeOf(carInstance) === Car.prototype) // true - они равны по ссылке

// carInstance.changePrice(10000)  // test - выведет в консоль это приватное свойство, при вызове метода
// console.log(carInstance) // 10000

// carInstance.updateModel('Q5')
// console.log(carInstance)

// Car.logInfo(carInstance)

// console.log(carInstance.getModel()) // Q3

// carInstance.setModel('Q8')
// console.log(carInstance.getModel()) // Q8

console.log(carInstance)
console.log(carInstance.model)

carInstance.model = 'Q1';
console.log(carInstance.model); 