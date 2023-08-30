// 定义一个示例对象
const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// 定义一个防抖函数
const debounce = (func, delay) => {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
};

// 使用防抖函数来限制多次调用greet方法
person.debouncedGreet = debounce(person.greet, 1000);

// 多次触发debouncedGreet函数，只有最后一次会执行greet方法
person.debouncedGreet();
person.debouncedGreet();
person.debouncedGreet();
person.debouncedGreet();
person.debouncedGreet();
