/* 
节流

定义：n秒内，只执行一次，n秒内重新触发，也只执行一次

类型：
类型一：利用计时器：n秒内，只执行一次，n秒内重新触发，也只执行一次
类型二：利用时间戳：先执行一次，再n秒内，再执行一次。

使用条件：
1.特点：每隔一段时间，就触发一次==========================================================================================

使用场景：
1.按钮防双击
2.懒加载

注意事项一:
2.每隔一段时间，就要触发
3.与防抖的区别：
    3.1防抖是一定要等动作结束之后才触发；
    3.2而节流是每隔一段时间，就触发一次


注意事项二：
1.执行节流函数，需要加上两个额外 的括号
2.timer = null, clearTimeout(timer); 两句不等价，注意区分
3.args是一个类数组对象，记得用上apply, 不能使用call
4.要实现传入参数，需要写成fn.apply(null, args)
    4.1. this指向问题，需要写成fn.apply(this)
    4.2. 参数不要是可以省略的
5.Date.now()可以获取当前时间
arguments arguments arguments arguments arguments arguments arguments arguments
*/

function throttle(fn, delay){
    let timer;
    return function(){
        if(timer){
            return
        }else{
            const args = arguments;
            // console.log(args);
            // console.log(Array.isArray(args));//false
            timer = setTimeout(() =>{
                
                fn.apply(this, args);   //args是一个类数组对象，记得用上apply, 不能使用call
                
                timer = null;  //这一句是否与clearTimeout(timer);等价?------不等价，根据测试打印，发现停止的计时器等于一个数字，无法用于if判断    //此处较容易写成以上的代码；因为上面要用到布尔判定
                // timer = undefined;
                // console.log(`timer:${timer}`);
            }, delay);
        }
    }
}
function test(num){
    console.log(`我是执行函数${num}`);
}

// 举例一
const run = throttle(test, 1000);
run(1);
run(1);
run(1);


// 举例二--验证this指向
const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
person.run = throttle(person.greet, 1000);
person.run();
person.run();
person.run();
person.run();
person.run();


//类型二
// 利用时间戳
function throttle2(fn, delay){
    let time;
    return function(){
        if(!time || Date.now() - time >= delay){
            fn.apply(this, arguments);
            time = Date.now();
        }
    }
}

/* const run2 = throttle2(() => {
    console.log(`我是执行函数`);
}, 2000);
run2();
run2();
run2();
run2();
run2();
run2();
run2(); */


//两个类型结合
function throttle3(fn, delay, immediatly){
    if(immediatly === undefined){
        immediatly = true;
    }
    if(immediatly){
        //立即执行--时间戳
        let time;
        return function(){
            if(!time || Date.now() - time >= delay){
                fn.apply(this, arguments);
                time = Date.now();
            }
        }
    }else{
        //非立即执行--计时器
        let timer;
        return function(){
            if(timer){
                return
            }else{
                timer=setTimeout(() => {
                    fn.apply(this, arguments);
                    timer = null;
                }, delay)
            }
        }

    }
}

const run3 = throttle3(() => {
    console.log('aa')
}, 1000, true);

// run3();
// run3();
// run3();
// run3();
// run3();


// const run4 = throttle3(()=> {
//     console.log('aa')
// }, 1000, false);

// run4();
// run4();
// run4();
// run4();
// run4();
// run4();