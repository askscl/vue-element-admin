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
1.
2.每隔一段时间，就要触发
3.与防抖的区别：
    3.1防抖是一定要等动作结束之后才触发；
    3.2而节流是每隔一段时间，就触发一次


注意事项二：
1.执行节流函数，需要加上两个额外 的括号
2.timer = null, clearTimeout(timer); 两句不等价，注意区分
3.要实现传入参数，需要写成fn.call(null, args)
4.Date.now()可以获取当前时间

*/

function throttle(fn, delay){
    let timer;
    return function(){
        if(timer){
            return
        }else{
            const args = arguments;
            timer = setTimeout(() =>{
                fn.call(null, args);
                //这一句是否与clearTimeout(timer);等价------不等价，根据测试打印，发现停止的计时器等于一个数字，无法用于if判断
                //此处较容易写成以上的代码
                timer = null;
                // console.log(`timer:${timer}`);
            }, delay);
        }
    }
}
function test(){
    console.log(`我是执行函数`);
}
// const run = throttle(test, 2000);
// run();
// run();
// run();


//类型二
function throttle2(fn, delay){
    let time;
    return function(){
        if(!time || Date.now() - time >= delay){
            fn.call(null, arguments);
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
                fn.call(null, arguments);
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
                    fn.call(null, arguments);
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


const run4 = throttle3(()=> {
    console.log('aa')
}, 1000, false);

run4();
run4();
run4();
run4();
run4();
run4();