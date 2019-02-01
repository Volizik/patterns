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

class TransportFactory {
  createTransport(options) {
    switch(options.type) {
      case 'Moto':
        return new Moto(options);
      case 'Car':
        return new Car(options);
    }
  }
}

const factory = new TransportFactory();
const moto = factory.createTransport({type: 'Moto'});
const car = factory.createTransport({type: 'Car'});

console.log(moto);
console.log(car);