class BuildingBuilder {

  constructor() {
    this.windows = 0;
    this.doors = 1;
    this.floors = 1;
  }

  setWindows(amount) {
    this.windows = amount;
    return this;
  }

  setDoors(amount) {
    this.doors = amount;
    return this;
  }

  setFloors(amount) {
    this.floors = amount;
    return this;
  }

  setPool() {
    this.pool = true;
    return this;
  }

  setElevator() {
    this.elevator = true;
    return this;
  }

  build() {
    return new Building(this);
  }

}

class Building {
  constructor(props) {
    // Проверяем, принадлежит ли полученный объект классу BuildingBuilder
    if (!(props instanceof BuildingBuilder)) {
      return new Error('Argument is not an instance of BuildingBuilder!')
    }
    this.extendProperties(props);
  }

  // Проходим циклом по всем полям полученного класса,
  // и присваиваем его свойства классу Building
  extendProperties(props) {
    for (let prop in props) {
      this[prop] = props[prop];
    }
  }
}

class BuildingBuilderDirector {

  static eightFloorsBuilding() {
    return new BuildingBuilder()
      .setFloors(8) // Строим этажи
      .setElevator() // Устанавливаем лифт
      .setDoors(100) // Устанавливаем двери
      .setWindows(200) // Устанавливаем окна
      .build(); // строим здание
  }

}

const oneFloorBuilding = new BuildingBuilder()
  .setDoors(2) // Устанавливаем 2 двери
  .setWindows(4) // Устанавливаем 4 окна
  .setPool() // устанавливаем бассейн во дворе
  .build(); // строим здание

const skyscraperBuilding = new BuildingBuilder()
  .setFloors(100) // Строим этажи
  .setElevator() // Устанавливаем лифт
  .setDoors(2000) // Устанавливаем двери
  .setWindows(3000) // Устанавливаем окна
  .build(); // строим здание

const eightFloorsBuilding = BuildingBuilderDirector.eightFloorsBuilding();

console.log(oneFloorBuilding);
console.log(skyscraperBuilding);
console.log(eightFloorsBuilding);