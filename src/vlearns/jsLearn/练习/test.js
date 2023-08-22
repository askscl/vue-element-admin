function greet(greeting, name) {
    console.log(greeting + ', ' + this.name + '!');
  }
  
  const person1 = {
    name: 'Alice'
  };
  
  const person2 = {
    name: 'Bob'
  };
  
  const greetings = ['Good morning', 'Good afternoon', 'Good evening'];
  
  greet.apply(person1, greetings); 