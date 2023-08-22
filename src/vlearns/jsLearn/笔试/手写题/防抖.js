/**
 * 防抖：
 * 
 * 定义：n秒后执行，n秒内重新触发，则重新计时
 * 
 * 
 * 使用条件（三个）:
 * 1. 频繁调用某个函数
 * 2. 造成效率问题
 * 3. 需要的结果以最后一次调用为准
 * 
 * 使用场景：
 * 1.搜索框输入
 * 2.窗口改变尺寸

 * 思考：
 * 1.清空计时器的时机?
 * 2.如何传参数?
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