const person = {
    name: 'John',
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
  const debounce = (func, delay) => {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this), delay);
    };
  };
  
  person.debouncedGreet = debounce(person.greet, 1000);
  
  person.debouncedGreet();
  person.debouncedGreet();
  person.debouncedGreet();
  person.debouncedGreet();
  person.debouncedGreet();