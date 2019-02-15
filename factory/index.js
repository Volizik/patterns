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

class TransportFactory {
  static createTransport(type) {
    switch(type) {
      case 'Moto':
        return new Moto;
      case 'Car':
        return new Car;
    }
  }
}

const moto = TransportFactory.createTransport('Moto');
const car = TransportFactory.createTransport('Car');

console.log(moto);
console.log(car);