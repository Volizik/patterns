class Car {
  constructor() {
    this.color = 'white';
    this.maxSpeed = 300;
    this.wheels = 4
  }
}

class Moto {
  constructor() {
    this.color = 'black';
    this.maxSpeed = 200;
    this.wheels = 2
  }
}

const types = {
  Moto,
  Car
};

class TransportFactory {
  static createTransport(type) {
    return new types[type]
  }
}

const moto = TransportFactory.createTransport('Moto');
const car = TransportFactory.createTransport('Car');

console.log(moto);
console.log(car);