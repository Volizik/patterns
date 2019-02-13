class AbstractFactory {
  static createFactory(type) {
    return new type
  }
  createTransport() {}
}

class CarFactory extends AbstractFactory {
  constructor() {
    super();
    this.types = {
      Reno,
      Volvo,
      Tesla
    };
  }

  createTransport(type) {
    if (this.types[type]) {
      return new this.types[type];
    }
  }
}

class BicycleFactory extends AbstractFactory {
  constructor() {
    super();
    this.types = {
      Winner,
      Specialized,
      Scott
    };
  }

  createTransport(type) {
    if (this.types[type]) {
      return new this.types[type];
    }
  }
}

class Reno {
  constructor() {
    console.log(this)
  }
}

class Volvo {
  constructor() {
    console.log(this)
  }
}

class Tesla {
  constructor() {
    console.log(this)
  }
}

class Winner {
  constructor() {
    console.log(this)
  }
}

class Specialized {
  constructor() {
    console.log(this)
  }
}

class Scott {
  constructor() {
    console.log(this)
  }
}


const carFactory = AbstractFactory.createFactory(CarFactory);
carFactory.createTransport('Volvo');

const bicycleFactory = AbstractFactory.createFactory(BicycleFactory);
bicycleFactory.createTransport('Scott');