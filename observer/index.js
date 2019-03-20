class Observable {

    constructor(state = {}) {
        this.observers = []; // Список наблюдателей
        this._state = state; // Состояние наблюдаемого обьекта
    }

    set state(state) {
        this._state = {...this._state, ...state};
        this.broadcast();
    }
    get state() {
        return this._state;
    }
    // Подписать наблюдателя
    subscribe(observer) {
        this.observers.push(observer);
    }
    // Отписать наблюдателя
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    // Уведомить всех наблюдателей
    broadcast() {
        this.observers.forEach(observer => observer.notify(this.state));
    }

}

class Observer {

    constructor(callback) {
        this.callback = callback;
    }

    notify(val) {
        this.callback(val);
    }

}

const mother = new Observer(state => { console.log('Mother', state) });
const father = new Observer(state => { console.log('Father', state) });
const child = new Observer(state => { console.log('Child', state) });

const fridge = new Observable();

fridge.subscribe(mother);
fridge.subscribe(father);
fridge.subscribe(child);

fridge.state = {milk: 1, eggs: 10, soup: '2 liters'};

console.log(fridge.state);

fridge.unsubscribe(father);

fridge.state = {apples: 5};
