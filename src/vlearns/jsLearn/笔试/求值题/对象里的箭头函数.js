/* 
原因：
    1.箭头函数没有this，所以this指向的是上一级对象
    2.词法作用域，箭头函数的this指向的是函数定义时的上一级对象windwow，而不是执行时的对象
*/

const num = {
    a: 10,
    add(){ return this.a +2;},
    reduce: () => this.a - 2
};

console.log(num.add());
console.log(num.reduce()); // 报NaN