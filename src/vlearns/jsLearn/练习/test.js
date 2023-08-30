function debouce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

function play(n) {
    console.log(`play${n}`);
}



const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
person.run = debouce(person.greet, 1000);
person.run();
person.run();
person.run();
person.run();
person.run();
