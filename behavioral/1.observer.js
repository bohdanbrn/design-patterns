function Observable() {
    const observers = [];

    this.sendMessage = (msg) => {
        for (let i = 0; i < observers.length; i++) {
            observers[i].notify(msg);
        }
    };

    this.addObservers = (observer) => {
        observer.push(observer);
    };
}

function Observer(behaviour) {
    this.notify = (msg) => {
        behaviour(msg);
    };
}

const obj1 = new Observer((msg) => {
    console.log(msg);
});
const obj2 = new Observer((msg) => {
    alert(msg);
});

const observable = new Observable();
observable.addObservers(obj1);
observable.addObservers(obj2);

setTimeout(() => {
    observable.sendMessage("Curent time: " + new Date());
}, 3000);
