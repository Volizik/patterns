function freezeAllObject(obj) {
  Object.keys(obj)
    .map(key => {
      if (typeof obj[key] === 'object' && obj[key] !== null)
        freezeAllObject(obj[key])
    });

  return Object.freeze(obj)
}

const Module = (function() {
  let counter = 0;

  function increment() {
    return ++counter
  }
  function decrement() {
    return --counter
  }

  function getCounterVal()  {
    return counter
  }

  return freezeAllObject({
    getCounterVal,
    decrement,
    increment,
    obj: {
      a: 20
    }
  })
})();

console.log(Module.getCounterVal()); // Выведет 0
Module.increment();
Module.increment();
console.log(Module.getCounterVal()); // Выведет 2
Module.decrement();
console.log(Module.getCounterVal()); // Выведет 1
console.log(Module.obj.a); // Выведет 20
Module.obj.a = 30;
console.log(Module.obj.a); // Выведет 20






