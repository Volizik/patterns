let instance = null;

class Singleton {
  constructor(name, age) {
    if (instance) {
      return instance
    }
    instance = this;
    this.name = name;
    this.age = age;
  }
  static getInstance() {
    return instance
  }
}

console.log(Singleton.getInstance());

const inst1 = new Singleton('Vova', 12);
const inst2 = new Singleton('Vasya', 22);

console.log(inst1);
console.log(inst1.name = 'qwerty');
console.log(inst2);
console.log(inst1 === inst2);