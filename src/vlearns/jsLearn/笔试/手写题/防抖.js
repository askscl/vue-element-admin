/**
 * 防抖：
 * 
 * 定义：n秒后执行，n秒内重新触发，则重新计时
 * 
 * 考点：
 * 1.防抖
 * 2.闭包
 * 3.this指向及如何改变this指向
 * 4.剩余参数
 * 5.函数调用
 * 
 * 使用条件（三个）:
 * 1. 频繁调用某个函数
 * 2. 造成效率问题
 * 3. 需要的结果以最后一次调用为准
 * 
 * 使用场景：
 * 1.搜索框输入
 * 2.窗口改变尺寸
 * 3.类似于电梯关门，一旦有人进入，则重新计时，直到没人进入，倒计时关门

 * 思考：
 * 1.清空计时器的时机?
 * 2.如何传参数?--利用剩余参数，这个剩余参数是个伪数组，因此只能用apply
 * 3.this指向问题
 *     3.1. return的不能是箭头函数
 *     3.2. setTimeout里不能是普通函数，只能是箭头函数，要使用外层函数的this
 * 
 * @param {Function} fn 
 * @param {number} delay 
 * @returns 
 */
function debouce(fn, delay){
    let timer = null;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
        
    }
}


//运行举例一
const runner = debouce((num) => {
    console.log(`你好啊${num}`);
}, 300);

runner(1);
runner(1);
runner(1);
runner(1);


//运行举例二--验证this指向
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