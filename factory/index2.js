class Car {
  constructor(options) {
    this.color = options.color || 'white';
    this.maxSpeed = options.maxSpeed || 300;
  }
}

class Moto {
  constructor(options) {
    this.color = options.color || 'black';
    this.maxSpeed = options.maxSpeed || 200;
  }
}

const types = {
  Moto,
  Car
};

class TransportFactory {
  createTransport(options) {
    return new types[options.type](options)
  }
}

const factory = new TransportFactory();
const moto = factory.createTransport({type: 'Moto'});
const car = factory.createTransport({type: 'Car'});

console.log(moto);
console.log(car);