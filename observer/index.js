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

const client1 = new Observer(state => { console.log('Вася', state) });
const client2 = new Observer(state => { console.log('Петя', state) });
const client3 = new Observer(state => { console.log('Коля', state) });

const shop = new Observable();

shop.subscribe(client1);
shop.subscribe(client2);
shop.subscribe(client3);

shop.state = {adidas: 8, nike: 10};

shop.unsubscribe(client2);

shop.state = {puma: 5};
